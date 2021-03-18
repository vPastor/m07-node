const express = require('express');

const router = express.Router();

router.get("/",function(req,res,next){
    res.render("chat.pug",{title:"Express"});
});

router.get("/chat",function(req,res,next){
    res.render("chat.pug",{title:"Express"});
});

router.get("/incidencias",function(req,res,next){
    res.render("incidencia.pug",{title:"Express"});
});


module.exports = router;