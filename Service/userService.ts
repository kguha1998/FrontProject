import axios from 'axios';

import RestService from './rest';
import { BaseUrl, environment } from '../environment';

export const serviceClient = new RestService({
  baseURL: BaseUrl,
});
export const UserLogin = (data: any) => {
  return serviceClient.post(environment.url.loginUrl, data);
};
export const AddressAdd = (data: any) => {
  return serviceClient.post(environment.url.addressAddUrl, data);
};
export const AddressList = (data: any) => {
  return serviceClient.get(environment.url.addressListUrl+'/'+ data);
};
