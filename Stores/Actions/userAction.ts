import AsyncStorage from '@react-native-async-storage/async-storage';
import {AddressAdd, AddressList, UserLogin} from '../../Service/userService';
import {ApiCallErrorAction, BeginApiCallAction} from './apiStatusActions';

export enum UserActionTypes {
  Login_Success_Action = '[USER] Login Success Action',
  Logout_Success_Action = '[USER] Logout Success Action',
  Address_Add_Sucess_Action = '[USER] Address Add Action',
  Address_List_Action = '[USER] Address List Action',
}
export const LoginAction = (payload: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(BeginApiCallAction({
      count: 1,
      message: 'Signing Please Wait...'}))
    return UserLogin(payload)
      .then(response => {
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data));
        } else {
          dispatch(LoginSuccess(response.data));
        }
      })
      .catch(error => {
        if (error?.response?.status === 403) {
          dispatch(
            ApiCallErrorAction({
              errorCode: '',
              message: 'Please Login again to continue.',
            }),
          );
          AsyncStorage.multiRemove(['token'])
          dispatch(UserLogoutSuccess());
        } else if (error?.response?.status === 500) {
          dispatch(
            ApiCallErrorAction({
              errorCode: '',
              message: error?.response?.data?.message,
            }),
          );
        } else {
          dispatch(
            ApiCallErrorAction({
              errorCode: '',
              message: 'Error encountered please try again later',
            }),
          );
        }
      });
  };
};
export const LoginSuccess = (payload: any) => {
  return {
    type: UserActionTypes.Login_Success_Action,
    payload: payload,
  };
};

export const UserLogoutSuccess = () => {
  return {type: UserActionTypes.Logout_Success_Action};
};



export const AddressAddAction = (payload: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(BeginApiCallAction({
      count: 1,
      message: 'Please Wait...'}))
    return AddressAdd(payload)
      .then(response => {
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data));
        } else {
          dispatch(AddressAddSuccessAction());
        }
      })
      .catch(error => {
        if (error?.response?.status === 403) {
          dispatch(
            ApiCallErrorAction({
              errorCode: '',
              message: 'Please Login again to continue.',
            }),
          );
          AsyncStorage.multiRemove(['token'])
          dispatch(UserLogoutSuccess());
        } else if (error?.response?.status === 500) {
          dispatch(
            ApiCallErrorAction({
              errorCode: '',
              message: error?.response?.data?.message,
            }),
          );
        } else {
          dispatch(
            ApiCallErrorAction({
              errorCode: '',
              message: 'Error encountered please try again later',
            }),
          );
        }
      });
  };
};
export const AddressAddSuccessAction = () => {
  return {
    type: UserActionTypes.Address_Add_Sucess_Action,
   
  };
};




export const AddressListAction = (payload: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(BeginApiCallAction({
      count: 1,
      message: 'Please Wait...'}))
    return AddressList(payload)
      .then(response => {
        console.log(response.data)
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data));
        } else {
          dispatch(AddressListSuccessAction(response.data));
        }
      })
      .catch(error => {
        if (error?.response?.status === 403) {
          dispatch(
            ApiCallErrorAction({
              errorCode: '',
              message: 'Please Login again to continue.',
            }),
          );
          AsyncStorage.multiRemove(['token'])
          dispatch(UserLogoutSuccess());
        } else if (error?.response?.status === 500) {
          dispatch(
            ApiCallErrorAction({
              errorCode: '',
              message: error?.response?.data?.message,
            }),
          );
        } else {
          dispatch(
            ApiCallErrorAction({
              errorCode: '',
              message: 'Error encountered please try again later',
            }),
          );
        }
      });
  };
};
export const AddressListSuccessAction = (payload: any) => {
  return {
    type: UserActionTypes.Address_List_Action,
    payload: payload,
  };
};