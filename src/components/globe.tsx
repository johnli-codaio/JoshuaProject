import * as THREE from 'three';
import ReactGlobe from 'react-globe.gl';
import type {Countries} from '../types/globe';
import {useCallback} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import {useState} from 'react';
import {getDataUrl} from '../utils/import_utils';
import classes from './globe.less';

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
  [Severity.Mild]: '#FFFFE1',
  [Severity.Moderate]: '#F3758C',
  [Severity.Severe]: '#7D2898',
  [Severity.Extreme]: '#4C1E6E',
};

// TODO (johnli): Look into hover tooltips
function Globe() {
  const globeRef = useRef<any>(null);

  const [countries, setCountries] = useState<Countries>({features: []});

  const setupLighting = () => {
    const globe = globeRef.current;
    if (globe) {
      const lighting = globe.scene();
      const ambientLighting = lighting.children[1];
      const directionalLighting = lighting.children[2];
  
      ambientLighting.intensity = 1.05;
      directionalLighting.intensity = 0.15;
    }
  };

  const loadCountryData = async () => {
    const res = await fetch(getDataUrl('countries.geo.json'));
    const data = await res.json();
    setCountries(data);
  };

  // TODO (johnli): Have better coloring, pull information from Joshua Project.
  const getPolygonColor = useCallback((_polygon) => {
    return `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}`;
  }, [countries]);

  const globeMaterial = new THREE.MeshPhongMaterial();
  globeMaterial.color = new THREE.Color(0xeaf2ff);
  globeMaterial.shininess = 15;
  globeMaterial.specular = new THREE.Color(0xeaf2ff);

  useEffect(() => {
    void loadCountryData();
  }, []);


  // Apparently does not work in useEffect.
  setupLighting();
  return (
    <div className={classes.container}>
      <ReactGlobe
        ref={globeRef}
        // globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        globeMaterial={globeMaterial}
        polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
        polygonLabel={({properties}: any /* Fix type later */) => {
          return properties.name;
        }}
        polygonCapColor={getPolygonColor}
        backgroundColor={'rgba(0,0,0,0)'}
        polygonStrokeColor={'#000000'}
        showAtmosphere={false}
        height={1000}
        width={1000}
      />
    </div>
  );
}

export default Globe;
