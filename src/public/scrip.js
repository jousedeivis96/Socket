var socket = io()
var form=document.getElementById("form")
var mensaje =document.getElementById("mensaje")
var nombre= document.getElementById("Usuario")
var Estaciones= document.getElementById("Estaciones")

var messages=document.getElementById("msg")
form.addEventListener('submit',(J)=>{
  J.preventDefault();
  socket.emit('enviar mensaje',{
      enviar:mensaje.value,
      nombres:nombre.value
  }) 
  
  Limpiarcaja()

})

socket.on('enviar mensaje', (data)=> {
    var item = document.createElement('div');
    item.innerHTML=  '<strong> '+ data.nombres + '</strong>' + '<p> '+ data.enviar + '</p>' 
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
    });

    function cambio() {
      
    var data=Estaciones.value
    socket.emit('Canal', data)
      
    }
    socket.on('Canal', function(data){
      window.alert("conectado A:"+data)
    })
    function Limpiarcaja(){
      mensaje.value=null
    }

