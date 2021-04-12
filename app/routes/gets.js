const express = require('express');
const router = express.Router();
var chatCtrl = require('../controllers/chat');
var inciCtrl = require('../controllers/incidencia');
var bodyParser = require('body-parser');

router.get("/",function(req,res,next){
    res.render("chat.pug");
});

router.get("/chat",function(req,res,next){
    res.render("chat.pug");
});
router.get("/chat/new",async function(req,res,next){
    res.render("newAsignatura.pug",data);
});

router.get("/incidencias",async function(req,res,next){
    
    res.render("incidencia.pug",{title:"Express"});
    
    return res;
});
router.get("/incidencias/list",async function(req,res,next){
    var list = inciCtrl.list();
    res.send(list);
    
    return res;
});
router.post('/incidencias', function (req, res) {
    var nuevaincidencia = {
    name: req.body.name || '',
    dni: req.body.dni || '',
    tipo: req.body.tipo || '',
    urgencia : req.body.urg || '',
    descripcion : req.body.desc|| ''
 };
    var loggo = inciCtrl.create(nuevaincidencia);
    console.log(loggo);
    res.render("incidencia.pug");
});

module.exports = router;