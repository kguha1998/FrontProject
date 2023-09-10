import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartItems,  PaymentMode, PlaceOrder } from "../../Service/cartService";
import { ApiCallErrorAction, BeginApiCallAction } from "./apiStatusActions";
import { UserLogoutSuccess } from "./userAction";

export enum CartItemsActionTypes {
  CartItem_Success_Action = '[Cart] CartItem Success Action',
  PaymentMode_Success_Action = '[Cart] PaymentMode Success Action',
  Order_Success_Action ='[Cart] Order Success Action',
}

export const CartItemAction = (defaultProductData: any) => {
  console.log("i am from action",defaultProductData)
    return (dispatch: any, getState: any) => {
      dispatch(BeginApiCallAction({
        count: 1,
        message: 'Please Wait...'}))
      return CartItems(defaultProductData)
        .then(response => {
          console.log(response.data)
          if (response.status != 200) {
            dispatch(ApiCallErrorAction(response.data));
          } else {
            dispatch(CartItemSuccessAction(response.data));
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
        }});
}};
  export const CartItemSuccessAction = (payload: any) => {
    return {
      type: CartItemsActionTypes.CartItem_Success_Action,
      payload: payload,
    };
  };
export const PaymentModeAction = (payload: any) => {
 
    return (dispatch: any, getState: any) => {
      dispatch(BeginApiCallAction({
        count: 1,
        message: 'Please Wait...'}))
      return PaymentMode(payload)
        .then(response => {
          
          if (response.status != 200) {
            dispatch(ApiCallErrorAction(response.data));
          } else {
            dispatch(PaymentModeSuccessAction(response.data));
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
        }});
}};
  export const PaymentModeSuccessAction = (payload: any) => {
    return {
      type: CartItemsActionTypes.PaymentMode_Success_Action,
      payload: payload,
    };
  };
  export const PlaceOrderAction = (payload: any) => {
    console.log("i am inside action",payload)
    return (dispatch: any, getState: any) => {
      dispatch(BeginApiCallAction({
        count: 1,
        message: 'Please Wait...'}))
      return PlaceOrder(payload)
        .then(response => {
         console.log('i am in action',response.data)
          if (response.status != 200) {
            dispatch(ApiCallErrorAction(response.data));
          } else {
            dispatch(OrderSuccessAction());
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
  export const OrderSuccessAction = () => {
    return {
      type: CartItemsActionTypes.Order_Success_Action
    };
  };





