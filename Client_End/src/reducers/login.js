import { login_Actions } from '../constants/Login'
import { login_Status } from '../constants/Login'
const login_initialState = {
  login_status: login_Status.login_SignIn.NEW,
};

export default function (state = login_initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case login_Actions.login_SignIn.NEW:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, login_status: action.type };
    case login_Actions.login_SignIn.USER:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, login_status: action.type };
    case login_Actions.login_SignIn.ORDER:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, login_status: action.type };
    default:
      console.log("default is firing")

      return { ...state };

  }
};
