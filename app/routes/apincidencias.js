const express = require('express');
var inciCtrl = require('../controllers/incidencia');
const router = express.Router();


router.get("/", function (req, res, next) {
  //res.send("HOLA MUNDOO!")
  var chat = [{
    nick: "Pedro",
    text: "hola",
  },
  {
    nick: "Manuel",
    text: "hola, que tal",
  }];
  res.json(chat);
});

router.get("/list", function (req, res, next) {
  //res.send("HOLA MUNDOO!")
  res.json(inciCtrl.load);


});

router.get("/create", function (req, res, next) {
  res.render("incidencia.pug",{title:"Express"});
});

router.get("/filtraruser/:user", function (req, res, next) {
  //res.send("HOLA MUNDOO!")
  var user = req.params.user;
  res.json(inciCtrl.filterbyuser(user));
});

router.get("/filtrarestado/:estado", function (req, res, next) {
  //res.send("HOLA MUNDOO!")
  var estado = req.params.estado;
  res.json(inciCtrl.filterbyestado(estado));
});

router.delete("/delete/:id", function (req, res, next) {
  var id = req.params.id;
  res.json(inciCtrl.delete(id));
});
router.put("/cambiarestado/:id", function (req, res, next) {
  var id = req.params.id;
  res.json(inciCtrl.edit(id)); 

});

module.exports = router;