<<<<<<< HEAD
var userRouter = require('./routes/users');
=======
let userRouter = require('./routes/users');
let postBookRouter = require('./routes/postBook');
let booksRouter = require('./routes/books')
>>>>>>> chou
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

<<<<<<< HEAD
app.get('/', (req, res) => {
  res.send('Hello World!')
})
=======
app.use('/postBook', postBookRouter);

app.use('/books', booksRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
});


>>>>>>> chou

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


 
