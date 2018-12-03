
import { login_Actions } from '../constants/Login'
import store from '../store/index'
import { ROOT_URL } from '../constants/config';

export const DashBoardServer = {
    handleLogin: handleLogin,
    handleAllAccounts: handleAllAccounts,
    handleAllProperties:handleAllProperties
}

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
                        alert('failure')
                        return;
                    }
                    else if (data.signInStatus === 'authorized') {
                        store.dispatch({ type: login_Actions.login_SignIn.FOUND, payload: data });
                        return;
                    }
                    else if (data.signInStatus === 'not_authorized') {
                        store.dispatch({ type: login_Actions.login_SignIn.NOT_FOUND, payload: data });
                        return;
                    }
                });
        })
    return { type: login_Actions.login_SignIn.NEW, payload: 'none' };
};
export function handleAllAccounts() {
    const postRequest = fetch(ROOT_URL + '/api/Accounts/GetAllAcounts', {
        method: 'GET',
        headers: { 'Access-Control-Allow-Origin': ROOT_URL },
        mode: 'cors',
    }).then((response) => {
        console.log('********' + response.status);
        response.json().then(data => {
            if (data.signInStatus == 'Failure') {
                store.dispatch({ type: login_Actions.login_SignIn.FAILURE, payload: data });
                return;
            }
            else {
                store.dispatch({ type: login_Actions.login_SignIn.LOGIN, payload: data });
                return;
            }
        });
    })
    return { type: login_Actions.login_SignIn.NEW, payload: 'none' };

};
export function handleAllProperties() {
    const postRequest = fetch(ROOT_URL + '/api/RentINN/GetAllUploadedProperties', {
        method: 'GET',
        headers: { 'Access-Control-Allow-Origin': ROOT_URL },
        mode: 'cors',
    }).then((response) => {
        console.log('********' + response.status);
        response.json().then(data => {
            if (data.signInStatus == 'Failure') {
                store.dispatch({ type: login_Actions.login_SignIn.FAILURE, payload: data });
                return;
            }
            else {
                store.dispatch({ type: login_Actions.login_SignIn.HOME, payload: data });
                return;
            }
        });
    })
    return { type: login_Actions.login_SignIn.NEW, payload: 'none' };

};
