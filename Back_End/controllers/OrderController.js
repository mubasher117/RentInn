const UploadProperty = require("../models/Order");

exports.MakeOrder = (req,res) =>{
    ApprovedProperty.findOne({_id : req.body.PropertyId} , (err,property) => {
        if (err){
            res.status(500).json({'OrderStatus' : 'failure', 'err' : err})
        }
        else if (property == null || property == undefined){
            res.status(200).json({'OrderStatus' : 'PropertyNotApproved'})
        }
        else{
            const newOrder = new Order(req.body);
            newOrder.save((err,order => {
                if (err){
                    res.status(500).json({'OrderStatus' : 'failure', 'err' : err})
                }
                else{
                  res.status(200).json({'OrderStatus' : 'success', 'order' : order})  
                }
            }))
        }

    })
}