import { CartMain,  product } from './Cart';
import { ProductListMain } from './Product';
import { UserMain } from './User';
import { ErrorState } from './errorModels';
import { LoadingState } from './loadingModels';

export interface StoreState {
  
  CartMain: CartMain; 
  user: UserMain;
  product: ProductListMain;
  loading: LoadingState;
  error: ErrorState;
  
}
