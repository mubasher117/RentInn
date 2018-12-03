const UploadedProperty = require("../models/UploadedProperty");
const Login = require("../models/Login");
exports.UploadProperty = (req, res) => {
    Login.findOne({ _id: req.body.OwnerId }, (err, account) => {
        if (err) {
            console.log("Error in Server " + account)
            res.status(500).send({ 'uploadStatus': 'failure', 'err': err });
        }
        if (account == null || account == undefined) {
            console.log("Account not found")
            res.status(200).send({ 'uploadStatus': 'OwnerNotFound' });
        }
        else {
            console.log("entered in upload property successfully")
            const newProperty = new UploadedProperty(req.body);
            newProperty.save((err, property) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({ 'PropertyUpload': 'failure', 'err': err });
                }
                else {
                    res.status(200).json({ 'PropertyUpload': 'successful', 'property': property });
                }
            })
        }
    }
    );
}








exports.GetAllUploadedProperties = (req, res) => {
    console.log("got in get uploaded properties")
    UploadedProperty.find({}, (err, properties) => {
        if (err) {
            res.status(500).json({ 'PropertyShow': 'Unsuccessful', 'err': err })
        }
        else {
            console.log("Got all Properties");
            res.status(200).json({ 'PropertyShow': 'Successful', 'properties': properties })
        }
    })
}

exports.GetSpecificUploadedProperty = (req, res) => {
    UploadedProperty.find({ _id: req.params.propertyId }, (err, prop) => {
        if (err) {
            res.status(500).send({ 'propertyStatus': 'failed', 'err': err })
        }
        else {
            res.status(200).json({ 'propertyStatus': 'found', property: prop })
        }
    })
};
exports.DeleteUploadedProperty = (req, res) => {
    UploadedProperty.deleteOne({ _id: req.body.id }, (err, property) => {
        if (err) {
            res.status(500).send({ 'deleteStatus': 'failed', 'err': err })
        }
        else {
            res.status(200).json({ 'deleteStatus': 'success', 'property': property })
        }
    })
}
exports.DeleteAllUploadedProperties = (req, res) => {
    UploadedProperty.deleteMany({}, (err,remaining) => {
        if (err){
            res.status(500).send({ 'deleteStatus': 'failed', 'err': err })
        }
        else{
            res.status(200).json({ 'deleteStatus': 'success', 'property': remaining })
        }
    })
}
