import store from '../store/index'
import { ROOT_URL } from '../constants/config';
import {picture_Actions} from '../constants/Picture'
import { seller_Actions } from '../constants/Seller';
import { json } from 'body-parser';

export const PictureServer = {
    GetPictures : GetPictures,
    AddPicture : AddPicture
}

export function GetPictures(PropertyId){
    console.log('got in Picture server')
    const postRequest = fetch(ROOT_URL + '/api/RentINN/GetPropertyPictures/'+ PropertyId, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        mode: 'cors'
    }).then((response) => {
        response.json().then(data => {
            store.dispatch({type :picture_Actions.picture.GETPICTURES ,payload : data.Pictures[0].Location})
          
        });
    })
    return {type : picture_Actions.picture.NEW, payload : 'none'}
}

export function AddPicture(PropertyId, Url){
    const pic = {"PropertyId" : PropertyId, "Location" : Url}
    fetch(ROOT_URL + '/api/RentINN/AddPicture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        mode: 'cors',
        body : JSON.stringify(pic)
    }).then((response) => {
        response.json().then(data => {
            if (data.PictureStatus === 'Added'){
                alert("Added")
                store.dispatch({type : picture_Actions.picture.ADDPICTURE, payload : data})
            }
        })
    })
    
    return {type : picture_Actions.picture.NEW, payload : 'none'}
}