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
export const AddressFetch = (data: any) => {
  return serviceClient.get(environment.url.addressFetchUrl+'/'+ data);
};

export const AddressEdit = (address_id: any,data: any) => {
  // console.log('inside service call',address_id);
  // console.log('inside service call',data)
  const url = `${environment.url.addressEditUrl}/${address_id}`;
  //console.log('inside servicecall ',url)
  return serviceClient.put(url, data);
};

export const AddressDelete = (data: any) => {
  return serviceClient.get(environment.url.addressDeleteUrl+'/'+ data);
};




