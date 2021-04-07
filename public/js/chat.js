$("#send").click(function(){
    $("#chat").append(
    '<div style="text-align:right">'
    +$("#msg").val()
    +'<span class="badge badge-secondary">'
    +"Yo"
    +"</span>"
    +"</div><br>")
    $('#msg').val('');
    console.log();
  })