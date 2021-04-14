const express = require('express');
const router = express.Router();
var chatCtrl = require('../controllers/chat');
var inciCtrl = require('../controllers/incidencia');
var bodyParser = require('body-parser');

router.get("/",function(req,res,next){
    //res.render("chat.pug");
});

router.get("/chat/:sala",function(req,res,next){
    var sala = req.params.sala;
    var data = {"sala":sala, "currentuser":currentuser };
    console.log(data);
    res.render("chat.pug",data);
});

module.exports = router;