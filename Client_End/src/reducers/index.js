import login_Reducer from './login';
import { combineReducers } from 'redux';
import seller_Reducer from './seller';
const rootReducer = combineReducers({
  login_Reducer,
  seller_Reducer,
});

export default rootReducer;
