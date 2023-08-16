import axios from 'axios';
import {BaseUrl, environment} from '../environment';
import RestService from './rest';

export const serviceClient = new RestService({
  baseURL: BaseUrl,
});
export const UserLogin = (data: any) => {
  return serviceClient.post(environment.url.loginUrl, data);
};
