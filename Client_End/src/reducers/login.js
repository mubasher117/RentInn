import { login_Actions } from '../constants/Login'
import { login_Status } from '../constants/Login'

const login_initialState = {
  login_status: login_Status.login_SignIn.HOME,
  accounts: '',
  properties: []
};
export default function (state = login_initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case login_Actions.login_SignIn.HOME:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, login_status: action.type, accounts: action.payload.accounts  };
    case login_Actions.login_SignIn.USER:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, login_status: action.type };
    case login_Actions.login_SignIn.ACCOUNTS:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, login_status: action.type,properties: action.payload.properties  };
    case login_Actions.login_SignIn.ORDER:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, login_status: action.type };
    case login_Actions.login_SignIn.SELLER:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, login_status: action.type };
    case login_Actions.login_SignIn.LOGIN:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, login_status: action.type,};
    case login_Actions.login_SignIn.DASH:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, login_status: action.type };
    case login_Actions.login_SignIn.FOUND:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, login_status: action.type };
    default:
      console.log("default is firing")
      return { ...state };
  }
};