import { product } from '../../Models/Cart';
import { StoreState } from '../../Models/reduxModel';

const defaultProductData: product[] = [
  {
    product_id: 66,
    quantity: 2,
    commodities: [1, 2, 3],
  },
  {
    product_id: 67,
    quantity: 1,
    commodities: [1, 2, 3],
  },
];

const InitialState: StoreState = {
  user: {
    user_detail: undefined,
    address_list: [],
    single_address: undefined,
  },
  error: {
    error: undefined,
  },
  CartMain: {
    cartdata: [], // Initialize cart data as an empty array
    Product: [],
  },
  loading: {
    count: 0,
    message: '',
  },
  product: {
    product_detail: [],
    commodity_detail: undefined,
  },
  cart: defaultProductData, // Store the default products array directly in cart
  products: [], // You can initialize products as an empty array or with some default data if needed,
};

export default InitialState;
