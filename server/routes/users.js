const { MongoClient, ServerApiVersion } = require('mongodb');
const User = require("../schemas/user");
const config = require('config');

const { OAuth2Client } = require('google-auth-library');

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
            registerPassword1: req.body.loginPassword
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
  
  function upsert(array, item) {
    const i = array.findIndex((_item) => _item.email === item.email);
    if (i > -1) array[i] = item;
    else array.push(item);
  }
  
  let google_clientId = config.get('google_clientId');
  const client = new OAuth2Client(google_clientId);


  userRouter.post('/google-login', async (req, res) => {

    const users = [];
    try{
      const { token } = req.body;
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,
      });
      const { name, email, picture } = ticket.getPayload();
      let registerEmail = email;
      upsert(users, { name, registerEmail, picture });
      res.status(200).json({
        status: 200,
        data:{ name, registerEmail, picture },
        success: true
    });

    }
    catch(err){
      res.status(400).json({
        status: 400,
        success: false,
        message: err.message,
      });

    }
   

  });

module.exports=userRouter;

