var express = require("express");
var dotenv = require('dotenv');

var app = express();
var path = require("path");
var router = express.Router();
dotenv.config();
const port = process.env.PORT;
console.log(`Your port is ${port}`);
var server = require("http")
.createServer(app)
.listen(port,()=>{
    console.log("server running on: "+port);
});
app.use(express.static(__dirname+'/views'));
router.get("/",function(req,res,next){
    res.render("index",{title:"Express"});
});
app.use("/",router);
module.exports=app;