import login_Reducer from './login';
import account_Reducer from './Account';
import { combineReducers } from 'redux';
import seller_Reducer from './seller';
import picture_reducer from './picture'

const rootReducer = combineReducers({
  login_Reducer,
  seller_Reducer,
  account_Reducer,
  picture_reducer
});
export default rootReducer;