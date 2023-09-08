import { ToastAndroid } from 'react-native';
import {ErrorModel} from '../../Models/errorModels';
import {LoadingPayload} from '../../Models/loadingModels';

export enum ApiStatusActionTypes {
  Begin_Api_Call = '[API_STATUS] Begin Api Call Action',
  Api_Call_Error = '[API_STATUS] Api Call Error Action',
  Api_Call_Success = '[API_STATUS] Api Call Success Action',
  Loading_Stop_Success = '[API_STATUS] Loading Stop Success',
  Signup_Error_success = '[API_STATUS] Signup Error Success',
  Signup_Error_Clean_Success = '[API_STATUS] Signup Error Clean Success',
}

export const BeginApiCallAction = (payload: LoadingPayload) => {
  return {type: ApiStatusActionTypes.Begin_Api_Call, payload: payload};
};

export const ApiCallErrorAction = (payload: ErrorModel) => {
  console.log('API CALL ERROR');

  return {type: ApiStatusActionTypes.Api_Call_Error, payload: payload};
};

export const ApiCallSuccessAction = () => {
  return {type: ApiStatusActionTypes.Api_Call_Success};
};

export const LoadingStopAction = () => {
  return {type: ApiStatusActionTypes.Loading_Stop_Success};
};

