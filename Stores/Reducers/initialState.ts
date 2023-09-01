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
  },
  Cart:{
    Cart_item:[],
    payment_mode:[]

  }

    
  

  
}

export default InitialState;
