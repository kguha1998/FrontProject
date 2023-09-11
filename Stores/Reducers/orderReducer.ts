import { CartMain } from "../../Models/Cart";
import { OrderMain } from "../../Models/OrderModel";
import { OrderItemsActionTypes } from "../Actions/orderActions";
import InitialState from "./initialState";

const initialState: OrderMain  = InitialState.OrderMain;
export default function OrderReducer(
 state: OrderMain = initialState,
 action: any,
) {
 switch (action.type) {
   
    case OrderItemsActionTypes.order_list_Success_Action:
     return { ...state ,order_list: action.payload }
   default:
     return state;
    
 }
}
