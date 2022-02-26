var userRouter = require('./routes/users');
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const express = require('express');

const app = express();
const port = 3001;

app.use(express.json());
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbUrl = "mongodb+srv://411team:2000123@cluster0.hhxsc.mongodb.net/411project?retryWrites=true&w=majority";

mongoose.connect(dbUrl, (err) => {
  if (err) console.log(err);
})
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


 
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://411team:2000123@cluster0.hhxsc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// var db;

// async function connectDB(){
//   mongoose.connect('mongodb://username:password@host:port/database?options...');


//   // try{
//   //   await client.connect();
//   //   db = client.db('411project');
//   //   exports.db;
//   //   console.log("Connected correctly to databse");
    
//   // }
//   // catch(err){
//   //   console.log(err.stack);
//   // }
//   // finally{
//   //   await client.close();
//   // }
// }
// connectDB().catch(console.dir);


