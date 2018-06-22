const express = require('express');
const bodyParser = require('body-parser');
const user_routes = require('./routes/user.routes');
const mongoose = require('mongoose');

//Mongo DB connetion
let db_url = 'mongodb://admin:w33adminzon@ds161620.mlab.com:61620/weezon_cloud';
let mongoDB = process.env.MONGODB_URI || db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connection error:'));

const app = express();
//Configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//Set Middleware route
app.use('/users',user_routes);

//Server config
let port = 6335;
app.listen(port,()=>{
    console.info("Weezon server is running on port number:"+port);
});