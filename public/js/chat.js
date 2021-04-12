const { Socket } = require("dgram");

$(document).ready(function () {
  //Inicializa socket con IO
  const socket = io();
  //Cuando cambia el select redirigimos a la URL del chat
  $('#selectRoom').on("change",()=>{
    var sala = $(this).find("option:selected").val();
    window.location.href = "/chat/"+sala;
  })
  
  //Accion cuando el usuario envia mensaje con submit
  $("#chat").submit(function (e) {
    e.preventDefault();
    var msg = $("#msg").val();
    $("#chatBox").append(`<p>${msg}<p>`);
    var toSend = {user:1,text:msg}
    socket.emit("newMsg",toSend);
  });

  //Acciones a realizar cuando se detecta actividad en el canal newMsg
  socket.on('newMsg',function(data){
    console.log("Mensaje recibido");
    var msg = $("#msg").val();
    $("#chatBox").append(`<p>${msg}<p>`);
  });
});
