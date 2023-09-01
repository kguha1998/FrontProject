import axios from 'axios';
import RestService from './rest';
import { BaseUrl, environment } from '../environment';

export const serviceClient = new RestService({
  baseURL: BaseUrl,
});
export const CartItems = (data: any) => {
  return serviceClient.post(environment.url.productInput, data);
};
export const PaymentMode = (data: any) => {
  return serviceClient.post(environment.url.paymentModeUrl, data);
};

