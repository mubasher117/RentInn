const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UploadedProperty = new Schema({
    OwnerId : {
        type: Schema.Types.ObjectId, ref : 'Login'
    },
    Title : {
        type : String
    },
    Address : {
        type : String
    },
    PropertyType : {
        type : String
    },
    Bedrooms : {
        type : String
    },
    Bathrooms : {
        type : String
    },
    Garage : {
        type : Boolean
    },
    AC : {
        type : Boolean
    }
})



module.exports = mongoose.model("UploadedProperty", UploadedProperty);