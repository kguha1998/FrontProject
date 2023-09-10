import { product } from '../../Models/Cart';
import { StoreState } from '../../Models/reduxModel';



const InitialState: StoreState = {
  user: {
    user_detail: undefined,
    address_list: [],
    single_address: undefined,
  },
  error: {
    error: undefined,
  },
  loading: {
    count: 0,
    message: '',
  },
  product: {
    product_detail: [],
    commodity_detail: undefined,
    Store_Product: undefined
  },
  CartMain: {
    cartdata: undefined,
    Product: [],
    PaymentMode: undefined,
    cartItems: undefined
  },
  OrderMain:{
    order_list:[]
  }
  
};

export default InitialState;
