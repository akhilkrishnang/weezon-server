/*Controller for weezon server user management*/
const User = require('../models/user.model');

exports.createUser = function(req,res){
    let _newUser = new User({
        phoneNum:req.body.phoneNum,
        name:req.body.name,
        password:req.body.password,
        email:req.body.email
    });

    _newUser.save(function(err){
        if(err) return next(err);
        res.send("User created successfully!"); 
    });
};

exports.getUser = function(req,res){
    User.findOne({phoneNum:req.params.phoneNum},(err,user)=>{
        if(err)
            return next(err);
        res.send(user);
    });
};

exports.deleteUser = function(req,res){
    User.findByIdAndRemove(req.params.id,(err,user)=>{
        if(err) return next(err);
        res.send("User '"+user.name+"' deleted successfully!");
    });
};

exports.updateUser = function(req,res){
    User.findByIdAndUpdate(req.params.id,{$set:req.body},(err,user)=>{
        if(err) return next(err);
        res.send("User '"+user.name+"' updated successfully!");
    });
};