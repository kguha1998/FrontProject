import {StoreState} from '../../Models/reduxModel';

const InitialState: StoreState = {
  user: {
    user_detail: undefined,
    address_list: [],
  },
  error: {
    error: undefined,
  },
  loading: {
    count: 0,
    message: '',
  },
}

export default InitialState;
