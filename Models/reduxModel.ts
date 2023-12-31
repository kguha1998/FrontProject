import { CartMain,  product } from './Cart';
import { OrderMain } from './OrderModel';
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
  OrderMain: OrderMain;
}
