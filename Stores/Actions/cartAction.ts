import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartItems } from "../../Service/cartService";
import { ApiCallErrorAction, BeginApiCallAction } from "./apiStatusActions";

export enum CartItemsActionTypes {
    CartItem_Success_Action = '[Cart] CartItem Success Action',
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

