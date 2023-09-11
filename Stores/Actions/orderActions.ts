import AsyncStorage from "@react-native-async-storage/async-storage";

import { ApiCallErrorAction, BeginApiCallAction } from "./apiStatusActions";
import { UserLogoutSuccess } from "./userAction";
import { Orderlist } from "../../Service/orderService";

export enum OrderItemsActionTypes {

    order_list_Success_Action = '[Cart] Order_list Success Action'
}


  export const Order_listAction = (payload: any) => {
    console.log("i am inside action",payload)
    return (dispatch: any, getState: any) => {
      dispatch(BeginApiCallAction({
        count: 1,
        message: 'Please Wait...'}))
      return Orderlist(payload)
        .then(response => {
         console.log('i am in action',response.data)
          if (response.status != 200) {
            dispatch(ApiCallErrorAction(response.data));
          } else {
            dispatch(Order_listSuccessAction(response.data));
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
    }
  };
  export const Order_listSuccessAction = (payload:any) => {
    return {
      type: OrderItemsActionTypes.order_list_Success_Action,
      payload: payload,
    };
  };





