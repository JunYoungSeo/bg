const express = require('express');
const socket = require('socket.io');
const http = require('http');
const router = express.Router();
const server = http.createServer(router);
const io = socket(server);

io.on('connection', (socket)=>{
  console.log('a user conected');

  socket.on('init', (data)=>{
    console.log(data.name);
    socket.emit('welcome', 'hello ${data.name)');
  });
});

router.get('/socket', function(req, res){
        console.log('http://localhost:3002/api2/');
        res.send({greeting:'Hello React x Node.js'});
});



module.exports = router;
