let userRouter = require('./routes/users');
let postBookRouter = require('./routes/postBook');
let booksRouter = require('./routes/books')
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const express = require('express');
const config = require('config');

const app = express();
const port = 3001;

app.use(express.json());
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbUrl = config.get('dbUrl');

mongoose.connect(dbUrl, (err) => {
  if (err) console.log(err);
})
app.use('/users', userRouter);

app.use('/postBook', postBookRouter);

app.use('/books', booksRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


 
