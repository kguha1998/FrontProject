import {UserMain} from './User';
import {ErrorState} from './errorModels';
import {LoadingState} from './loadingModels';

export interface StoreState {
  user: UserMain;
  loading: LoadingState;
  error: ErrorState;
}
