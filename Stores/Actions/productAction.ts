import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductList } from "../../Service/productService";
import { ApiCallErrorAction, BeginApiCallAction } from "./apiStatusActions";
import { UserActionTypes } from "./userAction";




export enum ProductActionTypes {
    ProductList_Success_Action = '[ORDER] ProductList Success Action',
    // Logout_Success_Action = '[USER] Logout Success Action',
}
 
  export const ProductListAction = (payload: any) => {
    return (dispatch: any, getState: any) => {
      dispatch(BeginApiCallAction({
        count: 1,
        message: 'Please Wait...'}))
      return ProductList(payload)
        .then(response => {
          console.log(response.data)
          if (response.status != 200) {
            dispatch(ApiCallErrorAction(response.data));
          } else {
            console.log("api",response.data)
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
            // AsyncStorage.multiRemove(['token'])
          //   dispatch(UserLogoutSuccess());
          // } else if (error?.response?.status === 500) {
          //   dispatch(
          //     ApiCallErrorAction({
          //       errorCode: '',
          //       message: error?.response?.data?.message,
          //     }),
          //   );
          // } else {
          //   dispatch(
          //     ApiCallErrorAction({
          //       errorCode: '',
          //       message: 'Error encountered please try again later',
          //     }),
          //   );
          // }
        });
    };
  };
  export const ProductListSuccessAction = (payload: any) => {
    return {
      type:ProductActionTypes.ProductList_Success_Action,
      payload: payload,
    };
  };
  
  // export const UserLogoutSuccess = () => {
  //   return {type: UserActionTypes.Logout_Success_Action};
  // };