const { MongoClient, ServerApiVersion } = require('mongodb');
const Book = require("../schemas/book");
const fetch = require('node-fetch');
const config = require('config');

var express = require('express');
const booksRouter = express.Router();
let gbook_APIkey = config.get('gbook_APIkey');

booksRouter.get('/latest', async (req, res) => {
    // res.end('Will send all the dishes to you');
    try{
        let books = await Book.find({}).sort({'createdAt': 'desc'}).limit(4);
        res.status(200).json({
            status: 200,
            data: books,
            success:true
          });

    } catch(err){
        res.status(400).json({
            status: 400,
            message:err.message,
            success:false
        });
    }
})

booksRouter.get('/id/:bookId', async (req, res) => {
    try{
        let book = await Book.findById(req.params.bookId);
        res.status(200).json({
            status: 200,
            data: book,
            success:true 
        })

    } catch(err){
        res.status(400).json({
            status: 400,
            message:err.message,
            success:false
        });
    }
})

booksRouter.get('/category/:categoryName', async (req, res) => {
    try{
        let category = req.params.categoryName;
        let books = await Book.find({"category": `${category}`}).sort({'createdAt': 'desc'})  ;
        res.status(200).json({
            status: 200,
            data: books,
            success:true 
        })

    } catch(err){
        res.status(400).json({
            status: 400,
            message:err.message,
            success:false
        });
    }
})

booksRouter.get('/googleBook/:title/:author', async (req, res) => {
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

  

module.exports=booksRouter;
