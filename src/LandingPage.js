import React, { useEffect } from 'react';
import socketio from 'socket.io-client';

const socket = socketio.connect('http://seazest.win:3002');

function LandingPage(){
  socket.emit('init', {name: 'bella'});
  socket.on('welcome', (msg) => {
    console.log(msg);
  });
  return(
    <div></div>
  );
}

export default LandingPage;
