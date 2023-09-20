import AsyncStorage from '@react-native-async-storage/async-storage';
import {AddressAdd, AddressDelete, AddressEdit, AddressFetch, AddressList, UserDetailEdit, UserDetailFetch, UserLogin, UserSignup} from '../../Service/userService';
import {ApiCallErrorAction, BeginApiCallAction} from './apiStatusActions';
import { ErrorModel } from '../../Models/errorModels';
import { ToastAndroid } from 'react-native';

export enum UserActionTypes {
  Login_Success_Action = '[USER] Login Success Action',
  Signup_Success_Action = '[USER] Sign Success Action',
  Logout_Success_Action = '[USER] Logout Success Action',
  Address_Add_Sucess_Action = '[USER] Address Add Success Action',
  Address_List_Action = '[USER] Address List Action',
  Address_Edit_Success_Action = '[USER] Address Edit Success Action',
  Address_Fetch_Success_Action = '[USER] Address Fetch Success Action',
  Address_Delete_Success_Action = '[USER] Address Delete Success Action',
  User_Detail_Fetch_Success_Action = '[USER] User Detail Fetch Success Action',
  User_Detail_Edit_Success_Action = '[USER] User Detail Edit Success Action'

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
        }
         else {
          ToastAndroid.show('Login Successfull!', ToastAndroid.LONG);
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
          ToastAndroid.show('Invaild User!', ToastAndroid.LONG);
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

export const SignupAction = (payload: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(BeginApiCallAction({
      count: 1,
      message: 'Please Wait...'}))
    return UserSignup(payload)
      .then(response => {
        if (response.status !== 200) {
          //console.log("From Action",response.data);
          dispatch(ApiCallErrorAction(response.data));
          }
        else {
          ToastAndroid.show('Successfully Registered!', ToastAndroid.LONG);
          payload.navigation.navigate('Login')
          dispatch(SignupSuccessAction());
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
        } else if (error?.response?.status === 501) {
            ToastAndroid.show('Already Registered!', ToastAndroid.LONG);
            payload.navigation.navigate('Login');
          // dispatch(
          //   SignupErrorAction(error.response.data),
          // );
        } 
        else if (error?.response?.status === 500) {
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
export const SignupSuccessAction = () => {
  return {
    type: UserActionTypes.Signup_Success_Action,
  };
};

export const UserLogoutSuccess = () => {
  console.log("Logout",UserLogoutSuccess)
  return {type: UserActionTypes.Logout_Success_Action};
};

export const AddressAddAction = (payload: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(BeginApiCallAction({
      count: 1,
      message: 'Please Wait...'}))
    return AddressAdd(payload.data)
      .then(response => {
        //console.log(response.status);
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data));
        } else {
          payload.navigation.navigate('AddressList')
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
       console.log('Action',response.data)
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

export const AddressFetchAction = (payload: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(BeginApiCallAction({
      count: 1,
      message: 'Please Wait...'}))
    return AddressFetch(payload)
   
      .then(response => {
       // console.log(response.data)
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data));
        } else {
          dispatch(AddressFetchActionSuccessAction(response.data));
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
export const AddressFetchActionSuccessAction = (payload: any) => {
  return {
    type: UserActionTypes.Address_Fetch_Success_Action,
    payload: payload,

  };
};

export const AddressEditAction = (payload: any) => {
   const{address_id,data}=payload;
   console.log('inside user action ',address_id)
  console.log('inside action call',payload)
  // console.log(data)
  return (dispatch: any, getState: any) => {
    dispatch(BeginApiCallAction({
      count: 1,
      message: 'Please Wait...'}))
    return AddressEdit(address_id,data)
      .then(response => {
        console.log(response.data)
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data));
        } else {
          payload.navigation.navigate('AddressList')
          dispatch(AddressEditSuccessAction());
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
export const AddressEditSuccessAction = () => {
  return {
    type: UserActionTypes.Address_Edit_Success_Action,
  

  };
};

export const AddressDeleteAction = (payload: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(BeginApiCallAction({
      count: 1,
      message: 'Please Wait...'}))
    return AddressDelete(payload.address_id)
      .then(response => {
        //console.log(response.status);
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data));
        } else {
          dispatch(AddressListAction(payload.customer_id))
          dispatch(AddressDeleteSuccessAction());
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
export const AddressDeleteSuccessAction = () => {
  return {
    type: UserActionTypes.Address_Delete_Success_Action,
   
  };
};

export const UserDetailFetchAction = (payload: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(BeginApiCallAction({
      count: 1,
      message: 'Please Wait...'}))
    return UserDetailFetch(payload)
   
      .then(response => {
       // console.log(response.data)
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data));
        } else {
          dispatch(UserDetailFetchSuccessAction(response.data));
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
export const UserDetailFetchSuccessAction = (payload: any) => {
  return {
    type: UserActionTypes.User_Detail_Fetch_Success_Action,
    payload: payload,

  };
};

export const UserDetailEditAction = (payload: any) => {
   const{id,data}=payload;
   
  console.log('inside user action ',id)
  console.log('inside action call',payload)
  return (dispatch: any, getState: any) => {
  dispatch(BeginApiCallAction({
    count: 1,
    message: 'Please Wait...'}))
  return UserDetailEdit(id,data)
    .then(response => {
      //console.log(response.status);
      if (response.status != 200) {
        dispatch(ApiCallErrorAction(response.data));
        
      } else {
        
        dispatch(UserDetailEditSuccessAction(payload));
        ToastAndroid.show('Details Updated!', ToastAndroid.LONG);
        payload.navigation.navigate('ProfileMain')
        // setTimeout(() => {
        //  payload.navigation.navigate('ProfileMain');
        //  }, 5000); // Change the delay time (in milliseconds) as needed
      };
        
      
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
export const UserDetailEditSuccessAction = (payload: any) => {
 return {
   type: UserActionTypes.User_Detail_Edit_Success_Action,
   payload: payload,

 };
};