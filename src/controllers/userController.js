const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data);
      res.send({ msg: savedData });
    } else {
      res.status(400).send({
        msg: "Bad Request"
      })
    }

  } catch (error) {
    console.log("This is the error :", error.message)
    res.status(400).send({ msg: "error", error: error.message })//400 Bad request
  }
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not correct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "uranium",
      month:"august",
      organisation: "FUnctionUp",
    },
    "functionup-uranium" // Input 2 is the secret and the same will be used to decode tokens
  );
  //res.setHeader("x-auth-token", token);
  console.log(token)
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {

  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });

    res.send({ status: true, data: userDetails });
  } catch (error) {
    console.log("This is the error :", error.message)
    res.status(404).send({ msg: "error", error: error.message })//404 resource not found
  }
};  

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.send("No such user exists");
    }
  
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.send({ status: updatedUser, data: updatedUser });
  
  } catch (error) {
    console.log("This is the error :", error.message)
    res.status(403).send({ msg: "error", error: error.message })//401 AUTHENTICATION MISSING
  }
}

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId
    let user = await userModel.findById(userId)
    if (!user) {
      return res.send({ status: false, message: "no such user exists" })
    }
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
    res.send({ status: true, data: updatedUser })
  } catch (error) {
    console.log("This is the error :", error.message)
    res.status(403).send({ msg: "error", error: error.message })//403 NOT AUTHENTICATED OR FORBIDDEN
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
