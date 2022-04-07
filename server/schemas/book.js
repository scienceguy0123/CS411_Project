const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let bookSchema = new Schema(
    {
        title:  {type: String}, 
        author: {type:String},
        price: {type: Number},
        description: {type:String},
        category:{type:String},
        images:{type:Array},
        sellerEmail:{type:String}
    },{
        timestamps:true
    }
);
let Book = mongoose.model("book", bookSchema);

module.exports = Book;
