import {StoreState} from '../../Models/reduxModel';

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
  product:{
    product_detail:[],
    commodity_detail:undefined
  },
  cart:{
    cart_item:[],
    payment_mode:undefined

  }

    
  

  
}

export default InitialState;
