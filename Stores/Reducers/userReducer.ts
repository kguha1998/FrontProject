import {UserMain} from '../../Models/User';
import {UserActionTypes} from '../Actions/userAction';
import InitialState from './initialState';

const initialState: UserMain = InitialState.user;
export default function UserReducer(
  state: UserMain = initialState,
  action: any,
) {
  switch (action.type) {
    case UserActionTypes.Login_Success_Action:
      return {...state, user_detail: action.payload};
    case UserActionTypes.Address_List_Action:
        return {...state, address_list: action.payload};
    case UserActionTypes.Address_Fetch_Success_Action:
        return {...state, single_address: action.payload};
    case UserActionTypes.User_Detail_Edit_Success_Action:
      console.log("From Reducer",action.payload)
      return { ...state, user_detail: { ...state.user_detail, ...action.payload } };
    // case UserActionTypes.User_Detail_Edit_Success_Action:
    //   const updatedUserDetail = {
    //     customer_email: action.payload.customer_email || state.user_detail?.customer_email,
    //     customer_name: action.payload.customer_name || state.user_detail?.customer_name,
    //     customer_phone: action.payload.customer_phone || state.user_detail?.customer_phone,
    //   };
    
    //   return {
    //     ...state,
    //     user_detail: {
    //       ...state.user_detail,
    //       ...updatedUserDetail,
    //     },
    //   };
    
     
     // return {...state, user_detail:action.payload};   
    case UserActionTypes.Logout_Success_Action:
        return InitialState;
    default:
      return state;
  }
}