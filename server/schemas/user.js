const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        registerEmail:  {type: String}, 
        registerPassword1: {type: String}
    
<<<<<<< HEAD
=======
    },{
        timestamps:true 
>>>>>>> chou
    }
);
let User = mongoose.model("user", userSchema);

module.exports = User;
