import * as THREE from 'three';
import ReactGlobe from 'react-globe.gl';
import type {Countries} from '../types/globe';
import CountryInfo from './country_info';
import {useCallback} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import {useState} from 'react';
import {getAssetUrl, getDataUrl} from '../utils/import_utils';
import classNames from 'classnames';
import classes from './globe.less';
import {getCountries, getPeoples} from '../api/joshuaproject';
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

const CountryColorCodedSeverity = {
  [Severity.Mild]: '#FFF2EB',
  [Severity.Moderate]: '#FFCEC2',
  [Severity.Severe]: '#E79C9F',
  [Severity.Extreme]: '#AA747E',
};

const PeopleColorCodedSeverity = {
  [Severity.Moderate]: '#709775',
  [Severity.Extreme]: '#D00000',
}

// TODO (johnli): Look into hover tooltip
function Globe() {
  const globeRef = useRef<any>(null);

  const [countries, setCountries] = useState<Countries>({features: []});
  const [countryData, setCountryData] = useState<Record<string, any>>({});
  const [peopleData, setPeopleData] = useState<Array<any>>([]);
  const [countryPeopleData, setCountryPeopleData] = useState<Array<any>>([]);
  const [initialized, setInitialized] = useState<boolean> (false);
  const [currentCountry, setCurrentCountry] = useState<any | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<any | null>(null);
  const [currentPeopleGroup, setCurrentPeopleGroup] = useState<any | null>(null);

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
  
  const loadPeopleData = async () => {
    const {data: fetchedPeopleData} = await getPeoples();
    setPeopleData(fetchedPeopleData.data);
  };

  const getCountry = (polygon) => {
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

    return country;
  }
  // TODO (johnli): Have better coloring, pull information from Joshua Project.
  const getPolygonColor = useCallback((polygon) => {
    const country = getCountry(polygon);

    const ratioOfUnreachedPeople = country.PoplPeoplesLR / country.PoplPeoples;
    const numWorkersNeeded = country.WorkersNeeded ?? 0;

    const reachScore = ratioOfUnreachedPeople * numWorkersNeeded;

    // TODO (johnli): better coloring for defaults.
    if (reachScore === 0) {
      return '#FFFFE1';
    }

    if (reachScore < 10) {
      return CountryColorCodedSeverity[Severity.Mild];
    }

    if (reachScore < 30) {
      return CountryColorCodedSeverity[Severity.Moderate];
    }

    if (reachScore < 100) {
      return CountryColorCodedSeverity[Severity.Severe];
    }

    return CountryColorCodedSeverity[Severity.Extreme];
  }, [countryData]);

  const globeMaterial = new THREE.MeshPhongMaterial({
    shininess: 10,
    color: new THREE.Color(0xEDFAFD),
    specular: new THREE.Color(0xEDFAFD),
  });

  useEffect(() => {
    void loadCountryData();
    void loadPeopleData();
  }, []);


  useEffect(() => {
    if (currentCountry) {
      const country = getCountry(currentCountry);
      const peopleGroup = peopleData.filter(people => people.ROG3 === country.ROG3);
      setCountryPeopleData(peopleGroup);
    }
  }, [currentCountry, peopleData]);

  // Apparently does not work in useEffect.
  setupLighting();


  const onCountryClose = useCallback(() => {
    setCurrentCountry(null);
    setCountryPeopleData([]);
  }, []);

  const renderDetails = () => {
    if (!currentCountry && !currentPeopleGroup) {
      return null;
    }

    if (currentPeopleGroup) {
      return (
        <div className={classes.peopleContainer}>

        </div>
      );
    }

    if (currentCountry) {
      const country = getCountry(currentCountry);

      return (
        <div className={classes.countryContainer}>
          <CountryInfo country={country} onClose={onCountryClose}/>
        </div>
      );
    };
  };


  return (
    <div className={classNames(classes.container)}>
      <img className={classNames(classes.loadingSpinner, {[classes.hide]: initialized})} src={getAssetUrl('spinner.gif')} />
      <div className={classNames(classes.globeContainer, {[classes.hide]: !initialized})}>
        <ReactGlobe
          ref={globeRef}
          waitForGlobeReady={true}
          globeMaterial={globeMaterial}
          polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
          polygonLabel={({properties}: any /* Fix type later */) => {
            return `<span style="color:#111111;font-weight:bold">${properties.name}</span>`;
          }}
          polygonCapColor={getPolygonColor}
          polygonSideColor={() => '#666'}
          onPolygonHover={setHoveredCountry}
          onPolygonClick={setCurrentCountry}
          polygonAltitude={polygon => {
            if (polygon === currentCountry) {
              return 0.08;
            } else if (polygon === hoveredCountry) {
              return 0.04;
            } else {
              return 0.01;
            }
          }}
          pointsData={countryPeopleData}
          pointLat={(p: any) => p.Latitude}
          pointLng={(p: any) => p.Longitude}
          pointRadius={0.30}
          pointColor={(p: any) => p.LeastReached === 'Y' ? PeopleColorCodedSeverity[Severity.Extreme] : PeopleColorCodedSeverity[Severity.Moderate]}
          pointAltitude={(p: any) => Math.max(Math.log(p.WorkersNeeded || 1) * 0.07 + 0.1, 0.1)}
          backgroundColor={'rgba(0,0,0,0)'}
          polygonStrokeColor={() => '#111'}
          polygonsTransitionDuration={300}
          pointsTransitionDuration={300}
          showAtmosphere={false}
          height={1000}
          width={1000}
        />
      </div>
      <div className={classes.detailsContainer}>
        {renderDetails()}
      </div>
    </div>
  );
}

export default Globe;
