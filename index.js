const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
require('dotenv').config()

require('./db/index')
const { initGame, startGame, getGame } = require('./lib/game')
const { getPlayers, createPlayer } = require('./lib/player')

// placeholder for socket io namespaces
const ns = {}

app.use(express.json())
app.use(express.static('client'))

if (process.env.dev) {
  const cors = require('cors')
  app.use(cors())
}

// make an initialized game active
app.post('/api/game/start', async (req, res) => {
  try {
    const id = req.body.id
    if (!id) return res.send(400, ('Request must include a game id'))
    const data = await startGame(id)
    res.send(200, data)
  } catch (e) {
    res.send(500, e)
  }
})

// join a game
app.get('/api/game', async (req, res) => {
    try {
      const id = req.query.id
      if (!id) res.send(400, ('Request must include a game id'))
      const game = await getGame(id)
      const players = await getPlayers(id)
      const data = { game, players }
      res.json(200, data)
    } catch (e) {
      res.send(500, e)
    }
})

// initialize a game
app.post('/api/game', async (req, res) => {
    try {
      const data = await initGame()
      const gameId = data.game.uuid
      const namespace = '/' + gameId
      ns[gameId] = io.of(namespace)
      res.send(200, data)
      ns[gameId].on('connection', () => {
        console.log('a user connected to ' + namespace)
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

app.post('/api/player', async (req, res) => {
  try {
    if (!req.body || !req.body.gameId) {
      res.send(400, 'You must pass a gameId')
    } 
    const gameId = req.body.gameId
    const player = await createPlayer({ gameId })
    res.send(200, player)
    ns[gameId].emit('player:add', player)
  } catch (e) {
    res.send(400, e)
  }
})


// player API sends back player data with a QUEUE of sheets, as in queue: []
// sheet API sends back an array of lines, oldest to newest

app.get('/', function (req, res) {
  // res.sendFile(resolve(__dirname, 'client', 'index.html'));
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});