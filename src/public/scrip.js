var socket = io()
var form=document.getElementById("form")
var mensaje =document.getElementById("mensaje")
var messages=document.getElementById("msg")
form.addEventListener('submit',(J)=>{
  J.preventDefault();
  socket.emit('enviar mensaje',{
      enviar:mensaje.value
  })  
})

socket.on('enviar mensaje', (data)=> {
    var item = document.createElement('div');
    item.innerHTML= '<p> '+ data.enviar + '</p>' 
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
    });