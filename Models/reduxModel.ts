import { CartMain } from './Cart';
import {ProductListMain } from './Product';
import {UserMain} from './User';
import {ErrorState} from './errorModels';
import {LoadingState} from './loadingModels';

export interface StoreState {
  user: UserMain;
  product:ProductListMain;
  cart: CartMain;
  loading: LoadingState;
  error: ErrorState;
}
