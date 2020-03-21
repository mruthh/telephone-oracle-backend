const express = require('express')
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http)

const { resolve } = require('path')

const db = require('./db')

app.use(express.json())
app.use(express.static('client'))


app.get('/game/:id', (req, res) => {
  // TODO: check for an active game with that id. if there's not one, 400

  // send user the game html template
  res.sendFile(resolve(__dirname, 'client', 'game.html') )
})

app.get('/', function(req, res){
  res.sendFile(resolve(__dirname, 'client', 'index.html'));
});


io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});