const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String,
        unique:true
    },
    email:{
        required:true,
        type:String
    },
    password:{
        type:String,
        required:true
    }
},{ timestamps: true})

module.exports = User = mongoose.model("User",userSchema);