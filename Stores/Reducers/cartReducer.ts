 import { CartMain } from "../../Models/Cart";
 import { CartItemsActionTypes } from "../Actions/cartAction";
import InitialState from "./initialState";

const initialState: CartMain = InitialState.CartMain;
export default function CartReducer(
  state: CartMain = initialState,
  action: any,
) {
  switch (action.type) {
    case CartItemsActionTypes.CartItem_Success_Action:
      return {...state, cartdata: action.payload};
    case CartItemsActionTypes.PaymentMode_Success_Action:
      return {...state, PaymentMode: action.payload};
    case CartItemsActionTypes.Order_Complete_Action:
      console.log("i am in reducer ")
      return {  ...InitialState.CartMain };
    default:
      return state;
     
  }
}
