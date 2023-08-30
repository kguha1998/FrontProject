import { ProductListMain } from "../../Models/Product";
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
    // case UserActionTypes.Logout_Success_Action:
    //   return InitialState;
    default:
      return state;
  }
}