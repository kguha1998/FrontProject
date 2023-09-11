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
    case ProductActionTypes.CommodityList_Success_Action:
      return {...state, commodity_detail: action.payload};
      case ProductActionTypes.AddToCart_Success_Action:
        return {
          ...state,
          Store_Product: {
            ...(state.Store_Product || {}), // Provide a default empty object if Store_Product is undefined
            products: [
              ...(state.Store_Product?.products || []), // Use optional chaining and provide a default empty array
              ...action.payload.products, // New products from the action payload
            ],
          },
        };
        
    default:
      return state;
  }
}