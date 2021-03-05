var express = require("express");
var dotenv = require('dotenv');
var io = require("socket.io").listen(server);
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
var io = require("socket.io").listen(server);
app.use(express.static(__dirname+'/views'));
router.get("/",function(req,res,next){
    res.render("index",{title:"Express"});
});
io.sockets.on('connection', function(socket){
    socket.on('sendMessage',function(data){
        io.socket.emit('newMessage',{msg:data});
    });
});  
app.use("/",router);
module.exports=app;