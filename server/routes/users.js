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
      });
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: err.message,
      });
    }
  });
  

module.exports=userRouter;
// const dbConnect = dbo.getDb();
// const userCredentials = {
//     email: req.body.registerEmail,
//     password: req.body.registerPassword1
// }

// dbConnect
//     .collection("users")
//     .insertOne(userCredentials, function(err, result){
//         if(err){
//             res.status(400).send("Error registering user: " + err);
//         }else{
//             console.log(`Added a new match with id ${result.insertedId}`);
//             res.status(200).send(`Added a new match with id ${result.insertedId}`)
//         }
//     })

// })

