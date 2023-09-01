import {combineReducers} from '@reduxjs/toolkit';
import UserReducer from './userReducer';
import LoadingReducer from './loadingReducer';
import ErrorReducer from './errorReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  loading: LoadingReducer,
  error: ErrorReducer,
  product:productReducer,
});
export default rootReducer;
