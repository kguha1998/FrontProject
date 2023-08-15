import {UserLogin} from '../../Service/userService';
import {ApiCallErrorAction} from './apiStatusActions';

export enum UserActionTypes {
  Login_Success_Action = '[USER] Login Success Action',
  Logout_Success_Action = '[USER] Logout Success Action',
}
export const LoginAction = (payload: any) => {
  return (dispatch: any, getState: any) => {
    return UserLogin(payload)
      .then(response => {
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data));
        } else {
          dispatch(LoginSuccess(response.data));
        }
      })
      .catch(error => {
        if (error?.response?.status === 401) {
          dispatch(
            ApiCallErrorAction({
              errorCode: '',
              message: 'Please Login again to continue.',
            }),
          );
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
