var express = require("express");
var dotenv = require('dotenv');
dotenv.config();

//var io = require("socket.io").listen(server);
var app = express();
var path = require("path");
var ctrlDir = "app/controllers";
//var chatCtrl = require(path.join(ctrlDir, "chat"));
var chatCtrl = require("./app/controllers/chat");
var router = express.Router();
//CONECTAR A LA BASE DE DATOS
var mongoose = require("mongoose");
mongoose.connect(
    "mongodb://devroot:devroot@mongoz:27018/chatz?authSource=admin",{ useUnifiedTopology: true , useCreateIndex : true, useNewUrlParser:true},
    /*'mongodb://${process.env.MONGO_ROOT_USER}:${process.env.MONGO_ROOT_PASSWORD}@${process.env.MONGO_URI}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}authSource=admin' ,*/
    (err,res)=>{
        if(err) console.log('ERROR NO SE HA PODIDO CONECTAR A LA BASE DE DATOS'+ err);
        else console.log('Database online: '+process.env.MONGO_DB);
    }
);

//INTENTANDO IMPORTAR LAS VARIABLES DE .ENV
const port = process.env.PORT;
var server = require("http")
.createServer(app)
.listen(port,()=>{
    console.log("server running on: "+port);
});
app.set("views",__dirname+"/app/views");
app.use(express.static(__dirname+'/app/public'));
app.set("views engine","pug");

//ESTO ES PARA DECIRLE A EXPRESS DE DONDE COGER LAS VISTAS
//ENRUTADOR REDIRIGIENDO A ROUTES/GETS
//SE PUEDE HACER CON CUALQUIER SITUACION
var getRoutes = require('./app/routes/gets');
var apis = require('./app/routes/api');

app.use('/', getRoutes);
app.use('/api', apis);



//SOCKET NI IDEA
/*
var io = require("socket.io").listen(server);
io.sockets.on('connection', function(socket){
    socket.on('sendMessage',function(data){
        io.socket.emit('newMessage',{msg:data});
    });
});  */

//ESTAS DOS LINEAS NO RECUERDO
app.use("/",router);
module.exports=app;