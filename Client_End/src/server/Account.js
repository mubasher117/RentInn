
import { account_Actions } from '../constants/Account'
import store from '../store/index'
import { ROOT_URL } from '../constants/config';

export const AccountServer = {
    handleListings: handleListings,
    handleLogin: handleLogin,
    handleUser: handleUser
}
export function handleListings(packageId) {


    const postRequest = fetch(ROOT_URL + '/api/RentINN/GetSpecificUploadedProperty/' + packageId, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        mode: 'cors',
    }).then((response) => {
        console.log('********' + response.status);
        response.json().then(data => {
            if (data.getStatus == 'Failure') {

                store.dispatch({ type: account_Actions.account_SignIn.FAILURE, payload: data });
                return;
            }
            else {
                store.dispatch({ type: account_Actions.account_SignIn.OWNER_ID, payload: data });
                return;
            }


        });
    })

    return { type: account_Actions.account_SignIn.NEW, payload: 'none' };

};
export function handleUser(userId) {


    const postRequest = fetch(ROOT_URL + '/api/RentINN/GetSpecificUser/' + userId, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        mode: 'cors',
    }).then((response) => {
        response.json().then(data => {
            if (data.getStatus == 'failed') {
                store.dispatch({ type: account_Actions.account_SignIn.FAILURE, payload: data });
                return;
            }
            else {
                store.dispatch({ type: account_Actions.account_SignIn.LISTING, payload: data });
                return;
            }
        });
    })
    return { type: account_Actions.account_SignIn.NEW, payload: 'none' };
};

export function handleLogin(username, password) {

    var user = { 'name': username, 'password': password }
    fetch(ROOT_URL + '/api/Accounts/SignIn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        mode: 'cors',
        body: JSON.stringify(user)
    })
        .then((response) => {
            console.log('********' + response.status);
            response.json()
                .then(data => {
                    console.log(data.signInStatus)
                    if (data.signInStatus === 'failure') {
                        store.dispatch({ type: account_Actions.account_SignIn.FAILURE, payload: data });

                        return;
                    }
                    else if (data.signInStatus === 'authorized') {
                        store.dispatch({ type: account_Actions.account_SignIn.FOUND, payload: data });
                        return;
                    }
                    else if (data.signInStatus === 'not_authorized') {
                        store.dispatch({ type: account_Actions.account_SignIn.NOT_FOUND, payload: data });
                        return;
                    }
                });
        })
    return { type: account_Actions.account_SignIn.NEW, payload: 'none' };
};

