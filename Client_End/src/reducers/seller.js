import { seller_Actions } from '../constants/Seller'
import { seller_Status } from '../constants/Seller'
const seller_initialState = {
  seller_status: seller_Status.seller_SignIn.NEW,
  seller_id: '',
  user: ''
};
export default function (state = seller_initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case seller_Actions.seller_SignIn.NEW:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, seller_status: action.type };
    case seller_Actions.seller_SignIn.SUCCESS:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, seller_status: action.type };
    case seller_Actions.seller_SignIn.SELLER_ID:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, seller_status: action.type };
    case seller_Actions.seller_SignIn.MAIN:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, seller_status: action.type, user: action.payload.user };
    case seller_Actions.seller_SignIn.SELLER_DATA:// start fetching posts and set loading = true
      console.log("I am from Reduce new..");
      return { ...state, seller_status: action.type, seller_id: action.payload.Ownerid };
    default:
      console.log("default is firing")

      return { ...state };

  }
};
