import { admin_Actions } from '../constants/admin'
import { admin_Status } from '../constants/admin'
const admin_initialState = {
  admin_status: admin_Status.admin_SignIn.NEW,
};
export default function (state = admin_initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case admin_Actions.admin_SignIn.NEW:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, admin_status: action.type };
    default:
      console.log("default is firing")
      return { ...state };
  }
};