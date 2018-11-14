const UploadProperty = require("../models/UploadedProperty");

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
            const newProperty = new UploadProperty(req.body);
            newProperty.save((err, property) => {
                if (err) {
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








exports.GetUploadedProperty = (req, res) => {
    console.log("got in get uploaded properties")
    UploadProperty.find({}, (err, properties) => {
        if (err) {
            res.status(500).json({ 'PropertyShow': 'Unsuccessful', 'err': err })
        }
        else {
            console.log("Got all Properties");
            res.status(200).json({ 'PropertyShow': 'Successful', 'properties': properties })
        }
    })
}

exports.DeleteUploadedProperty = (req, res) => {
    UploadProperty.deleteOne({ _id: req.params.id }, (err, property) => {
        if (err) {
            res.status(500).send({ 'deleteStatus': 'failed', 'err': err })
        }
        else {
            res.status(200).json({ 'deleteStatus': 'success', 'property': property })
        }
    })
}

