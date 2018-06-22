const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    phoneNum: {type:String, required:true, unique:true},
    name: {type:String, required:true,max:100},
    password: {type:String, required:true},
    email: {type:String}    
});

module.exports = mongoose.model('User',UserSchema);