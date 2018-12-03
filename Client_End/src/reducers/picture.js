import {picture_Actions} from '../constants/Picture'

const picture_initialState = {
    pictures : "",
    newPic : null
}

export default function(state = picture_initialState, action){
    switch (action.type){
        
        case picture_Actions.picture.GETPICTURES:
        
        console.log("got in picyture reducer");
        alert (action.payload)
        return {
            
            ...state,
            pictures : action.payload
        }
        case picture_Actions.picture.ADDPICTURE:
        return {
            ...state,
            newPic : action.type
        }
        default :
        return {...state}
    }
}