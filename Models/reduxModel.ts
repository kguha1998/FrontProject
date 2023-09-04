import { CartMain, cart, product } from './Cart';
import { ProductListMain } from './Product';
import { UserMain } from './User';
import { ErrorState } from './errorModels';
import { LoadingState } from './loadingModels';

export interface StoreState {
  
  CartMain: CartMain; // Include CartMain in the StoreState
  user: UserMain;
  product: ProductListMain;
  cart: cart[];
  loading: LoadingState;
  error: ErrorState;
  products: product[]; // input format for our cart data
}
