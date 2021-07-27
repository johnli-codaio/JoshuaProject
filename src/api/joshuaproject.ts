import axios from 'axios';
import {wrapUrlWithCorsProxy} from './helpers';

export async function getCountries(page?: number) {
  try {
    return await axios.get(wrapUrlWithCorsProxy('https://joshuaproject.net/api/v2/countries?api_key=aWye9lV20QtF&limit=240'));
  } catch (error) {
    console.error('Error retrieving JoshuaProject country data', error);
    return {data: []};
  }
}
