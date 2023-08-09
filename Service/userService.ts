import axios from 'axios';
import {environment, BaseUrl} from '../Environment';

export const UserLogin = (data: any) => {
  return axios.get(BaseUrl + environment.url.loginUrl, data);
};
