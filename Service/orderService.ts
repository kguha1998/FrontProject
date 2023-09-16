import axios from 'axios';
import RestService from './rest';
import { BaseUrl, environment } from '../environment';

export const serviceClient = new RestService({
  baseURL: BaseUrl,
});

export const Orderlist = (data: any) => {
 
  return serviceClient.get(environment.url.orderlist+'/'+data);
};

export const OrderDetails = (data: any) => {
 
  return serviceClient.get(environment.url.OrderDetails+'/'+data);
};


