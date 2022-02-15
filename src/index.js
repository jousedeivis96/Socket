const express = require('express');
const http = require('http')
const { Server } = require("socket.io");
app = express();

const server = http.createServer(app);
const io = new Server(server);

app.set('port', process.env.PORT || 5000 )
app.use(express.json())
app.use(express.static(__dirname + '/public'))
 

app.get('/', (req, res) => {
    res.sendFile('/public')
     });
     io.on('connection', (socket) => {console.log('a user connected'); socket.on('disconnect', () => {console.log('user disconnected'); });});
io.on('connection',(socket)=>{
    var estacion="";
    socket.on('Canal',(data)=>{
        socket.join(data)
        socket.emit('Canal',data)
        estacion=data;
    })
socket.on('enviar mensaje',(data)=>{
io.in(estacion).emit('enviar mensaje',data)
})
})

server.listen(app.get('port'), console.log (`Servidor ejecutándose en puerto ${app.get('port')}`))