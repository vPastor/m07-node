var express = require("express");
var dotenv = require('dotenv');
dotenv.config();
var bodyParser = require('body-parser');
//var io = require("socket.io").listen(server);
var app = express();
var path = require("path");
var ctrlDir = "app/controllers";
//var chatCtrl = require(path.join(ctrlDir, "chat"));
var chatCtrl = require("./app/controllers/chat");
var router = express.Router();


//INTENTANDO IMPORTAR LAS VARIABLES DE .ENV
const port = process.env.PORT;
var server = require("http")
.createServer(app)
.listen(port,()=>{
    console.log("server running on: "+port);
});
app.set("views",__dirname+"/app/views");
//app.use(express.static(__dirname+'/app/public'));
app.use(express.static(path.join(__dirname, "public")));
app.set("views engine","pug");

//ESTO ES PARA DECIRLE A EXPRESS DE DONDE COGER LAS VISTAS
//ENRUTADOR REDIRIGIENDO A ROUTES/GETS
//SE PUEDE HACER CON CUALQUIER SITUACION
var getRoutes = require('./app/routes/gets');
var apis = require('./app/routes/api');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/', getRoutes);
app.use('/api', apis);

var io = require("socket.io")(server);
var nicknames = {};
console.log("hola llega");
io.on("connection",(socket)=>{  
    console.log('conectado a socket');
    if(!socket.user) socket.user="Pedro";
    socket.on("sendmsg",(data)=>{
    console.log(data);
    io.sockets.emit("newMsg",data)});
    socket.on("newUser", function(data, callback){
        if(data in nicknames)
        {
            callback(false);
        }
        else{
            callback(true);
            socket.nickname = data;
            nicknames[data] = 1;
            updateNicknames();
        }
    })
});
function updateNicknames(){
    io.sockets.emit('usernames',nicknames);
}
//CONECTAR A LA BASE DE DATOS
var mongoose = require("mongoose");
//mongoose.connect('mongodb://devroot:devroot@mongo/chat?authMechanism=SCRAM-SHA-1');
mongoose.connect('mongodb://mongo:27017/chat', {useNewUrlParser: true},(err,res)=>{
    if(err) console.log('ERROR NO SE HA PODIDO CONECTAR A LA BASE DE DATOS => '+ err);
    else console.log('Database online: '+process.env.MONGO_DB);
});
/*mongoose.connect(
    'mongodb://devroot:devroot@mongo:27017/chat',
    /*'mongodb://'+process.env.MONGO_ROOT_USER +':'+process.env.MONGO_ROOT_PASSWORD+'@'+process.env.MONGO_URI+':'+process.env.MONGO_PORT+'/'+process.env.MONGO_DB+'authSource=admin'{ useUnifiedTopology: true , useCreateIndex : true, useNewUrlParser:true},
    (err,res)=>{
        if(err) console.log('ERROR NO SE HA PODIDO CONECTAR A LA BASE DE DATOS => '+ err);
        else console.log('Database online: '+process.env.MONGO_DB);
    }
);*/
//SOCKET NI IDEA
/*
var io = require("socket.io").listen(server);
io.sockets.on('connection', function(socket){
    socket.on('sendMessage',function(data){
        io.socket.emit('newMessage',{msg:data});
    });
});  */
/*Socket functions */


//ESTAS DOS LINEAS NO RECUERDO
app.use("/",router);
module.exports=app;