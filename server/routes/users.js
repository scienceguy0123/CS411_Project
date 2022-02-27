const { MongoClient, ServerApiVersion } = require('mongodb');
const User = require("../schemas/user");


var express = require('express');
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    try {
      let user = new User(req.body);
      user = await user.save();
      res.status(200).json({
        status: 200,
        data: user,
        success:true
      });
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: err.message,
        success:false
      });
    }
  });

  userRouter.post("/login", async (req, res) => {
    try {
        let user = await User.findOne({
            registerEmail: req.body.loginEmail,
            registerPassword: req.body.loginPassword
        });

        if(user){
            res.status(200).json({
                status: 200,
                data:user,
                success: true
            });
        }
        else{
            res.status(400).json({
                status: 400,
                success: false,
                message: "Wrong email or password",
              });
        }
    } catch (err) {
      res.status(400).json({
        status: 400,
        success: false,
        message: err.message,
      });
    }
  });
  

module.exports=userRouter;

