 const express = require('express');

const router = express.Router();


router.get("/",function(req,res,next){
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

module.exports = router;