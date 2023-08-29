import axios from 'axios';

import RestService from './rest';
import { BaseUrl, environment } from '../environment';

export const serviceClient = new RestService({
  baseURL: BaseUrl,
});
export const ProductList = (data: any) => {
  return serviceClient.get(environment.url.productUrl);
};