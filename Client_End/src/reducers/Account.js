import { account_Actions } from '../constants/Account'
import { account_Status } from '../constants/Account'
const account_initialState = {
  account_status: account_Status.account_SignIn.NEW,
  listings: [],
  ownerId:'',
};

export default function (state = account_initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case account_Actions.account_SignIn.NEW:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, account_status: action.type };
    case account_Actions.account_SignIn.OWNER_ID:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, account_status: action.type, listings: action.payload.property };
    case account_Actions.account_SignIn.LISTING:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, account_status: action.type, ownerId: action.payload.user };
    case account_Actions.account_SignIn.DETAILS:// start fetching posts and set loading = true
      return { ...state, account_status: action.type };
    case account_Actions.account_SignIn.USER:// start fetching posts and set loading = true
      return { ...state, account_status: action.type };
    default:
      console.log("default is firing")
      return { ...state };

  }
};
