import axios, {AxiosRequestConfig, AxiosInstance} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class RestService {
  [x: string]: any;
  client: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.client = axios.create(config);
    this.client.interceptors.request.use(
      async config => {
        const token = await getToken();
        if (token && !!config.headers) {
          config.headers['Authorization'] = 'Bearer '+ token;
        }
        console.log('Request: ', config.url, config.headers?.Authorization);
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    this.client.interceptors.response.use(
      async response => {
        if (response?.data?.token) {
          await setToken(response?.data?.token);
          this.client.defaults.headers.common['Authorization'] =
          'Bearer '+response?.data?.token;
        }
        return response;
      },
      async error => {
        const originalRequest = error?.config;
        if (error?.response?.status === 403 && !originalRequest?._retry) {
          originalRequest._retry = true;
          await new Promise((resolve: any) => setTimeout(resolve, 1000));
          return this.client(originalRequest);
        } else if (
          error?.response?.status === 408 &&
          !originalRequest?._retry
        ) {
          originalRequest._retry = true;
          if (error?.response?.data?.token) {
            await setToken(error?.response?.data?.token);
            this.client.defaults.headers.common['Authorization'] =
            'Bearer '+ error.response?.data?.token;
            await new Promise((resolve: any) => setTimeout(resolve, 500));
            return this.client(originalRequest);
          }
          await new Promise((resolve: any) => setTimeout(resolve, 1000));
          return this.client(originalRequest);
        }

        return Promise.reject(error);
      },
    );
  }

  get(endpoint: string) {
    return this.client.get<any>(endpoint);
  }

  post(endpoint: string, payload: any) {
    return this.client.post<any>(endpoint, payload);
  }

  put(endpoint: string, payload: any) {
    return this.client.put<any>(endpoint, payload);
  }
}

const getToken = async (): Promise<string | null> => {
  return await AsyncStorage.getItem('token');
};

const setToken = async (token: string) => {
  return await AsyncStorage.setItem('token', token);
};
