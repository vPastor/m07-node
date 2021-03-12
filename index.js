var express = require("express");
var dotenv = require('dotenv');
var io = require("socket.io").listen(server);
var app = express();
var path = require("path");
var router = express.Router();

//ENRUTADOR REDIRIGIENDO A ROUTES/GETS
//SE PUEDE HACER CON CUALQUIER SITUACION
var getRoutes = require('./routes/gets');
const { get } = require("https");
app.use('/', getRoutes);



//INTENTANDO IMPORTAR LAS VARIABLES DE .ENV
const port = process.env.PORT;
dotenv.config();
console.log('Your port is '+port);

//ESTA FUNCION NO RECUERDO PARA QUE SIRVE
var server = require("http")
.createServer(app)
.listen(port,()=>{
    console.log("server running on: "+port);
});
//ESTO ES PARA DECIRLE A EXPRESS DE DONDE COGER LAS VISTAS
app.use(express.static(__dirname+'/views'));
//SOCKET NI IDEA
var io = require("socket.io").listen(server);
io.sockets.on('connection', function(socket){
    socket.on('sendMessage',function(data){
        io.socket.emit('newMessage',{msg:data});
    });
});  

//ESTAS DOS LINEAS NO RECUERDO
app.use("/",router);
module.exports=app;