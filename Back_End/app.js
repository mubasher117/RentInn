// app.js
const cors = require('cors');
const express = require("express");
var path = require('path')
const bodyParser = require("body-parser");
var config = require("./config/db");
const loginController = require("./controllers/LoginController");
const registerController = require("./controllers/RegisterController");
const app = express();
const port = process.env.PORT || 3301;
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const UploadPropertyController = require("./controllers/UploadPropertyController")
const ApprovePropertyController = require("./controllers/ApprovePropertyController")



app
  .route("/api/Accounts/SignIn")
  .post(loginController.handleSignInAttempt)

app
  .route("/api/Accounts/Register")
  .post(registerController.handleRegister)

app
  .route("/api/RentINN/UploadProperty")
  .post(UploadPropertyController.UploadProperty)
app 
  .route("/api/RentINN/GetUploadedProperty")
  .get(UploadPropertyController.GetUploadedProperty)
app
  .route("/api/RentINN/DeleteUploadedProperty/:id")
  .delete(UploadPropertyController.DeleteUploadedProperty)

app
  .route("/api/RentINN/ApproveProperty/:id")
  .post(ApprovePropertyController.ApproveProperty)
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
