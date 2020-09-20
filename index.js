const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
require('dotenv').config()

require('./db/index')
const { initGame, startGame, getGame, markGameComplete } = require('./lib/game')
const { getPlayers, createPlayer, updatePlayer } = require('./lib/player')
const { getLastLine, addLine, getLines } = require('./lib/line')
const { getSheets } = require('./lib/sheet')

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
    // TODO: allow passing params
    const data = await startGame(id)
    ns[id].emit('game:start', data)
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
    const player = await createPlayer(gameId)
    res.send(200, player)
    ns[gameId].emit('player:add', player)
  } catch (e) {
    res.send(400, e)
  }
})

app.patch('/api/player', async (req, res) => {
  try {
    if (!req.body || !req.body.id) {
      return res.send(400, 'You must pass the id of the player to update')
    }
    if (!req.body.params) {
      return res.send(400, 'You must pass a params object with the params to update')
    }
    const player = await updatePlayer(req.body.id, req.body.params)
    const gameId = player.game_id
    ns[gameId].emit('player:update', player)
    res.send(200, player)
  } catch (e) {
    res.send(500, e)
  }
})

app.get('/api/line/last', async (req, res) => {
  try {
    if (!req.query || !req.query.sheetId) {
      return res.send(400, 'You must pass a sheetId')
    }
    const line = await getLastLine(req.query.sheetId)
    return res.send(200, line)
  } catch (e) {
    res.send(500, e)
  }
})

app.post('/api/line', async (req, res) => {
  try {
    if (!req.body) {
      res.send(400, 'Request body missing')
    }
    const { sheetId, gameId, playerId, text } = req.body
    if (!sheetId || !gameId || !playerId || !text) {
      res.send(400,
        'You must include sheetId, gameId, playerId, and text in the request body')
    }
    const line = await addLine({ sheetId, playerId, text })
    
    const sheets = await getSheets(gameId)

    // check if game is complete
    const gameIsComplete = sheets.every(sheet => {
      return !sheet.active_player_id
    })

    if (gameIsComplete) {
      markGameComplete(gameId)
      ns[gameId].emit('game:complete', sheets)
      res.send(200, line)
      return
    }

    ns[gameId].emit('sheet:pass', sheets)
    res.send(200, line)
  } catch (e) {
    res.send(500, e)
  }
})

app.get('/api/line', async (req, res) => {
  const sheetId = req.query.id
  try {
    const data = await getLines(sheetId)
    res.send(200, data)
  } catch (e) {
    res.send(400, e)
  }
})

app.get('/', function (req, res) {
  // res.sendFile(resolve(__dirname, 'client', 'index.html'));
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});