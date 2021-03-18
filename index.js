var express = require("express");
var dotenv = require('dotenv');
dotenv.config();

//var io = require("socket.io").listen(server);
var app = express();
var path = require("path");
var ctrlDir = "/controllers";


var chatCtrl = require(path.join(ctrlDir, "chat"));


var router = express.Router();

//INTENTANDO IMPORTAR LAS VARIABLES DE .ENV
const port = process.env.PORT;
console.log('Your port is '+port);

//ESTA FUNCION NO RECUERDO PARA QUE SIRVE
var server = require("http")
.createServer(app)
.listen(port,()=>{
    console.log("server running on: "+port);
});

app.use(express.static(__dirname+'/views'));

//ESTO ES PARA DECIRLE A EXPRESS DE DONDE COGER LAS VISTAS
//ENRUTADOR REDIRIGIENDO A ROUTES/GETS
//SE PUEDE HACER CON CUALQUIER SITUACION
var getRoutes = require('./routes/gets');
var apis = require('./routes/api');
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