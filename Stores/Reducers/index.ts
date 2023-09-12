import {combineReducers} from '@reduxjs/toolkit';
import UserReducer from './userReducer';
import LoadingReducer from './loadingReducer';
import ErrorReducer from './errorReducer';
import productReducer from './productReducer';
import CartReducer from './cartReducer';
import OrderReducer from './orderReducer';
// import CartReducer from './cartReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  loading: LoadingReducer,
  error: ErrorReducer,
  product:productReducer,
  CartMain: CartReducer,
  OrderMain:OrderReducer,
});
export default rootReducer;
