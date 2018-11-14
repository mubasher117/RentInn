const UploadProperty = require("../models/ApprovedProperty");

exports.ApproveProperty = (req,res) =>{
    UploadProperty.findOne({_id : req.body.PropertyId} , (err,property) => {
        if (err){
            res.status(500).json({'approveStatus' : 'failure', 'err' : err})
        }
        else if (property == null || property == undefined){
            res.status(200).json({'approveStatus' : 'PropertyNotFound'})
        }
        else{
            const AppProp = new ApprovedProperty(req.body);
            AppProp.save((err,property => {
                if (err){
                    res.status(500).json({'approveStatus' : 'failure', 'err' : err})
                }
                else{
                  res.status(200).json({'approveStatus' : 'success', 'property' : property})  
                }
            }))
        }

    })
}