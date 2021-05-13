const express = require('express');
const app = express();
const http = require('http').createServer(app);
const api = require('./routes/index');
const cors = require('cors');
const io = require('socket.io')(http, {
  cors: {
    origin: "http://seazest.win:3000",
    methods: "GET",
  }
});


app.set('view engine', 'views');
app.set('views', __dirname);

app.use(cors());
app.use('/api', api);

io.on('connection', (socket)=>{
  console.log('a user connection');

  socket.on('init', (data)=>{
    console.log(data.name);
    io.emit('welcome', `hello ${data.name}`);
  });
  socket.on("disconnect", ()=>{
    console.log("user disconnected");
  });
});

const port = 3002;
//app.listen(port, ()=>console.log(`Listening on port ${port}`));
http.listen(port, ()=>console.log(`Listening on port ${port}`));
