import { CartMain } from "../../Models/Cart";
import { CartItemsActionTypes } from "../Actions/cartAction";
import InitialState from "./initialState";

const initialState: CartMain = InitialState.Cart;
export default function CartReducer(
  state: CartMain = initialState,
  action: any,
) {
  switch (action.type) {
    case CartItemsActionTypes.CartItem_Success_Action:
      return {...state, cart_detail: action.payload};
    default:
      return state;
  }
}