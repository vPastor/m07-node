const express = require('express');

const router = express.Router();

router.get("/",function(req,res,next){
    res.render("index",{title:"Express"});
});

router.get("/chat",function(req,res,next){
    res.render("chat",{title:"Express"});
});

router.get("/incidencias",function(req,res,next){
    res.render("incidencias",{title:"Express"});
});


module.exports = router;