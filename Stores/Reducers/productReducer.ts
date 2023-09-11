import { ProductListMain } from "../../Models/Product";
import { CartItemsActionTypes } from "../Actions/cartAction";
import { ProductActionTypes} from "../Actions/productAction";
import InitialState from "./initialState";

const initialState: ProductListMain = InitialState.product;
export default function ProductReducer(
  state: ProductListMain = initialState,
  action: any,
) {
  switch (action.type) {
    case ProductActionTypes.ProductList_Success_Action:
      return {...state, product_detail: action.payload};
    case ProductActionTypes.CommodityList_Success_Action:
      return {...state, commodity_detail: action.payload};
    case ProductActionTypes.AddToCart_Success_Action:
      return {...state, Store_Product: action.payload};  
      case CartItemsActionTypes.Order_Complete_Action:
      console.log("i am in reducer ")
      return {  ...state, Store_Product: null };
    default:
      return state;
  }
}