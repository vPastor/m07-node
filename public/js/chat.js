$(document).ready(function () {
  console.log("hola!");
  //Inicializa socket con IO
  const socket = io();
  var nickname = $("#nickname");
  var setNick = $("#setNick");
  var users = $("#users");
  //Cuando cambia el select redirigimos a la URL del chat
  $('#selectRoom').on("change",()=>{
    
    var sala = $(this).find("option:selected").val();
    console.log("cambiando de salaa"+sala);
    window.location.href = "/chat/"+sala;
  })
  setNick.click(function(e){
      e.preventDefault();
      socket.emit('newUser',nickname.val(),function(data){
          if(data){
            $("#nickContainer").hide();
            $("#content").show();
          }else{
            $("#login-error").show();
          }
      })
  })
  //Accion cuando el usuario envia mensaje con submit
  $("#send").submit(function (e) {
    e.preventDefault();
    msg = $("#msg").val();
    console.log(msg);
    /*
    $("#chat").append(`<p>${msg}<p>`);*/
    var toSend = {user:"Sandra",text:msg}
    socket.emit("sendmsg",toSend);
  });

  //Acciones a realizar cuando se detecta actividad en el canal newMsg
  socket.on('newMsg',function(data){
    console.log("Mensaje recibido");
    var user = data.user;
    var msg = data.text;
    $("#chat").append(`<p>${user}- ${msg}<p>`);
  });
});
