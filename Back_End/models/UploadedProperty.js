const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UploadedProperty = new Schema({

    OwnerId : {
        type : Schema.Types.ObjectId, ref : 'Account'
    },
    lat: {
        type: String
    },
    lan: {
        type: String
    },
    rent:{
        type:String
    },
    Address: {
        type: String
    },
    PropertyType: {
        type: String
    },
    MainImage: {
        type : String
    },
    Bedrooms: {
        type: Number
    },
    Bathrooms: {
        type: Number
    },
    Garage: {
        type: Boolean
    },
    AC: {
        type: Boolean
    }
})



module.exports = mongoose.model("UploadedProperty", UploadedProperty);