const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const express = require('express');
const fetch = require('node-fetch');
const config = require('config');
const app = express();
const port = 3001;

app.use(express.json());
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

let gbook_APIkey = config.get('gbook_APIkey');

app.get('/googleBook/:title/:author', async (req, res) => {
    try{
        let title = req.params.title;
        let author = req.params.author;
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=${gbook_APIkey}`)
        .then(response => response.json())
        .then(response => 
            res.status(200).json({
                status:200,
                data: response,
                success:true
            }))


    } catch(err){
        res.status(400).json({
            status: 400,
            message:err.message,
            success:false
        });
    }
})
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

