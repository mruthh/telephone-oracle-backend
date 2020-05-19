const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
require('dotenv').config()

require('./db/index')
const { initGame, startGame } = require('./game')
const { getPlayers } = require('./player')

// placeholder for socket io namespaces
const namespaces = {}

app.use(express.json())
app.use(express.static('client'))

if (process.env.dev) {
  const cors = require('cors')
  app.use(cors())
}

app.post('/api/game/start', async (req, res) => {
  try {
    const id = req.body.id
    if (!id) throw new Error('Request must include a game id')
    const data = await startGame(id)
    res.send(200, data)
  } catch (e) {
    res.send(400, e)
  }
})

app.get('/api/game', async (req, res) => {
    try {
      const id = req.query.id
      if (!id) throw new Error('Request must include a game id')
      const data = await getGame(id)
      res.send(200, data)
    } catch (e) {
      res.send(400, e)
    }
})
  
app.post('/api/game', async (req, res) => {
    try {
      const data = await initGame()
      const gameId = data.game.uuid
      namespaces[gameId] = io.of(gameId)
      res.send(200, data)
      namespaces[gameId].on('connection', () => {
        console.log('a user connected to ' + gameId)
      })
    } catch (e) {
      res.send(400, e)
    }
})
  
app.get('/api/player', async (req, res) => {
  const gameId = req.query.id
  try {
    const data = await getPlayers(gameId)
    res.send(200, data)
  } catch (e) {
    res.send(400, e)
  }
})


// player API sends back player data with a QUEUE of sheets, as in queue: []
// sheet API sends back an array of lines, oldest to newest

app.get('/', function (req, res) {
  // res.sendFile(resolve(__dirname, 'client', 'index.html'));
});


io.on('connection', function (socket) {
  console.log('a user connected');
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});