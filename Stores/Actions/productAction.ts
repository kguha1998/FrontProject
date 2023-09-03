import { CommodityList, ProductList } from "../../Service/productService";
import { ApiCallErrorAction, BeginApiCallAction } from "./apiStatusActions";


export enum ProductActionTypes {
    ProductList_Success_Action = '[ORDER] ProductList Success Action',
    CommodityList_Success_Action = '[ORDER] CommodityList Success Action'
}
 
  export const ProductListAction = (payload: any) => {
    return (dispatch: any, getState: any) => {
      dispatch(BeginApiCallAction({
        count: 1,
        message: 'Please Wait...'}))
      return ProductList(payload)
        .then(response => {
          if (response.status != 200) {
            dispatch(ApiCallErrorAction(response.data));
          } else {
            dispatch(ProductListSuccessAction(response.data));
          }
        })
        .catch(error => {
          // if (error?.response?.status === 403) {
            dispatch(
              ApiCallErrorAction({
                errorCode: '',
                message: 'Please Start Again.',
              }),
             );
            
        });
    };
  };
  export const ProductListSuccessAction = (payload: any) => {
    return {
      type:ProductActionTypes.ProductList_Success_Action,
      payload: payload,
    };
  };
 
  export const CommodityListAction = (payload: any) => {
    return (dispatch: any, getState: any) => {
      dispatch(BeginApiCallAction({
        count: 1,
        message: 'Please Wait...'}))
      return CommodityList(payload)
        .then(response => {
          if (response.status != 200) {
            dispatch(ApiCallErrorAction(response.data));
          } else {
            dispatch(CommodityListSuccessAction(response.data));
          }
        })
        .catch(error => {
            dispatch(
              ApiCallErrorAction({
                errorCode: '',
                message: 'Please Start Again.',
              }),
             );
            
        });
    };
  };
  export const CommodityListSuccessAction = (payload: any) => {
    return {
      type:ProductActionTypes.CommodityList_Success_Action,
      payload: payload,
    };
  };
  
  