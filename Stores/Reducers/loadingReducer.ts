import {LoadingState} from '../../models/loadingModels';
import {ApiStatusActionTypes} from '../Actions/apiStatusActions';
import {UserActionTypes} from '../Actions/userAction';
import InitialState from './initialState';

const initialState: LoadingState = InitialState.loading;

export default function LoadingReducer(
  state: LoadingState = initialState,
  action: any,
) {
  switch (action.type) {
    case ApiStatusActionTypes.Begin_Api_Call:
      return {
        ...state,
        count: state.count + action.payload.count,
        message: action.payload.message,
      };
    case ApiStatusActionTypes.Api_Call_Error:
      return {...state, count: state.count > 0 ? state.count - 1 : 0};
    case ApiStatusActionTypes.Api_Call_Success:
      return {...state, count: state.count > 0 ? state.count - 1 : 0};
    case ApiStatusActionTypes.Loading_Stop_Success:
      return {...state, count: 0};
    case UserActionTypes.Login_Success_Action:
      return {...state, count: state.count > 0 ? state.count - 1 : 0};
    case UserActionTypes.Address_Add_Sucess_Action:
        return {...state, count: state.count > 0 ? state.count - 1 : 0};
    case UserActionTypes.Address_Fetch_Success_Action:
        return {...state, count: state.count > 0 ? state.count - 1 : 0};
    case UserActionTypes.Address_Edit_Success_Action:
        return {...state, count: state.count > 0 ? state.count - 1 : 0};
    case UserActionTypes.Logout_Success_Action:
      return initialState;
    default:
      return state;
  }
}
