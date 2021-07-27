import * as THREE from 'three';
import ReactGlobe from 'react-globe.gl';
import type {Countries} from '../types/globe';
import {useCallback} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import {useState} from 'react';
import {getDataUrl} from '../utils/import_utils';
import classNames from 'classnames';
import classes from './globe.less';
import {getCountries} from '../api/joshuaproject';
import _ from 'lodash';

interface Props {
  onPolygonClick(): void;
  onPolygonHover(): void;
}

enum Severity {
  Mild,
  Moderate,
  Severe,
  Extreme,
}

const ColorCodedSeverity = {
  [Severity.Mild]: '#FFF2EB',
  [Severity.Moderate]: '#FFCEC2',
  [Severity.Severe]: '#E79C9F',
  [Severity.Extreme]: '#AA747E',
};

// TODO (johnli): Look into hover tooltips
function Globe() {
  const globeRef = useRef<any>(null);

  const [countries, setCountries] = useState<Countries>({features: []});
  const [countryData, setCountryData] = useState<Record<string, any>>({});
  const [initialized, setInitialized] = useState<boolean> (false);

  const setupLighting = () => {
    const globe = globeRef.current;
    if (globe && !initialized) {
      const lighting = globe.scene();
      const ambientLighting = lighting.children[1];
      const directionalLighting = lighting.children[2];
  
      ambientLighting.intensity = 1.25;
      directionalLighting.intensity = 0.05;

      setInitialized(true);
    }
  };

  const loadCountryData = async () => {
    const res = await fetch(getDataUrl('countries.geo.json'));
    const geoLocation = await res.json();

    const {data: fetchedCountryData} = await getCountries();
    const fetchedCountryDataMap = _.zipObject(
      fetchedCountryData.data.map(country => country.ISO2),
      fetchedCountryData.data,
    );
    

    setCountries(geoLocation);
    setCountryData(fetchedCountryDataMap);
  };

  // TODO (johnli): Have better coloring, pull information from Joshua Project.
  const getPolygonColor = useCallback((polygon) => {
    let country = countryData[polygon.properties.iso_a2];

    if (polygon.properties.iso_a2 === '-99') {
      if (polygon.properties.name === 'Somaliland') {
        country = countryData['SO'];
      }

      if (polygon.properties.name === 'N. Cyprus') {
        country = countryData['CY'];
      }

      if (polygon.properties.name === 'Kosovo') {
        country = countryData['XK'];
      }
    }

    const ratioOfUnreachedPeople = country.PoplPeoplesLR / country.PoplPeoples;
    const numWorkersNeeded = country.WorkersNeeded ?? 0;

    const reachScore = ratioOfUnreachedPeople * numWorkersNeeded;

    // TODO (johnli): better coloring for defaults.
    if (reachScore === 0) {
      return '#FFFFE1';
    }

    if (reachScore < 10) {
      return ColorCodedSeverity[Severity.Mild];
    }

    if (reachScore < 30) {
      return ColorCodedSeverity[Severity.Moderate];
    }

    if (reachScore < 100) {
      return ColorCodedSeverity[Severity.Severe];
    }

    return ColorCodedSeverity[Severity.Extreme];
  }, [countryData]);

  const globeMaterial = new THREE.MeshPhongMaterial({
    shininess: 10,
    color: new THREE.Color(0xEDFAFD),
    specular: new THREE.Color(0xEDFAFD),
  });

  useEffect(() => {
    void loadCountryData();
  }, []);


  // Apparently does not work in useEffect.
  setupLighting();
  return (
    <div className={classNames(classes.container, {[classes.hide]: !initialized})}>
      <ReactGlobe
        ref={globeRef}
        waitForGlobeReady={true}
        globeMaterial={globeMaterial}
        polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
        polygonLabel={({properties}: any /* Fix type later */) => {
          return properties.name;
        }}
        polygonCapColor={getPolygonColor}
        backgroundColor={'rgba(0,0,0,0)'}
        polygonStrokeColor={'#FFFFFF'}
        showAtmosphere={false}
        height={1000}
        width={1000}
      />
    </div>
  );
}

export default Globe;
