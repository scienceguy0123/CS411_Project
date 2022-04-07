const { MongoClient, ServerApiVersion } = require('mongodb');
const Book = require("../schemas/book");


var express = require('express');
const postBookRouter = express.Router();

postBookRouter.post("/", async (req, res) => {
    try {
      let book = new Book(req.body);
      book = await book.save();
      res.status(200).json({
        status: 200,
        data: book,
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


  

module.exports=postBookRouter;

