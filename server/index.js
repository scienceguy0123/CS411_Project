const express = require('express')
const app = express()
const port = 3001


 
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://411team:2000123@cluster0.hhxsc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function connectDB(){
  try{
    await client.connect();
    console.log("Connected correctly to databse");
  }
  catch(err){
    console.log(err.stack);
  }
  finally{
    await client.close();
  }
}
connectDB().catch(console.dir);

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})