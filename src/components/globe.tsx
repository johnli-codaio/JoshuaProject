import ReactGlobe from 'react-globe.gl';
import type {Countries} from '../types/globe';
import {useCallback} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import {useState} from 'react';
import {getDataUrl} from '../utils/import_utils';

interface Props {
  onPolygonClick(): void;
  onPolygonHover(): void;
}

// TODO (johnli): Look into hover tooltips
function Globe() {
  const globeRef = useRef();

  const [countries, setCountries] = useState<Countries>({features: []});

  const loadCountryData = async () => {
    const res = await fetch(getDataUrl('countries.geo.json'));
    const data = await res.json();
    setCountries(data);
  };

  // TODO (johnli): Have better coloring, pull information from Joshua Project.
  const getPolygonColor = useCallback((_polygon) => {
    return `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}`;
  }, [countries]);

  useEffect(() => {
    void loadCountryData();
  }, []);

  return (
    <ReactGlobe
      ref={globeRef}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
      polygonLabel={({properties}: any /* Fix type later */) => {
        return properties.name;
      }}
      polygonCapColor={getPolygonColor}
      backgroundColor={'#FFFFFF'}
      polygonStrokeColor={'#000000'}
      showAtmosphere={false}
      height={800}
      width={800}
    />
  );
}

export default Globe;