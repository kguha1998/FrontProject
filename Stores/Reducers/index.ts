import {combineReducers} from '@reduxjs/toolkit';
import UserReducer from './userReducer';
import LoadingReducer from './loadingReducer';
import ErrorReducer from './errorReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  loading: LoadingReducer,
  error: ErrorReducer,
});
export default rootReducer;
