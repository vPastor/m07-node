exports.load = (req, res, next) => {
    var chat = [{
       nick: "Pedro",
       text: "hola",
     },
     {
        nick: "Pedro",
        text: "hola",
      }];
      return res.status(200).json(chat);
  };
  
  exports.one = (req, res, next) => {
  
    console.log(req)
    var chat = {
      nick: "Pedro",
      text: "hola",
    };
    return res.status(200).json(chat);
  };