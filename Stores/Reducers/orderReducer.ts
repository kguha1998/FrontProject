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
    return {...state, order_list : action.payload};

  case OrderItemsActionTypes.order_detail_Success_Action:
    return {...state, order_detail : action.payload};



   default:
     return state;
    
 }
}
