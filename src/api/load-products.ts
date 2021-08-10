import { mapData } from './map-data-products';
import api from '../config/api';

// eslint-disable-next-line import/prefer-default-export
export const loadProduct = async (slug = '') => {
  await api
    .get(`/products`)
    .then(response => {
      const newResponse = mapData(response.data);
      console.log(newResponse);
    })
    .catch(error => {
      console.log(error);
    });
};
