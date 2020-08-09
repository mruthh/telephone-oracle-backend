const { Game } = require('../db/models/Game')
const { Player } = require('../db/models/Player')
const { Sheet } = require('../db/models/Sheet')
const { Line } = require('../db/models/Line')
const { getPlayers } = require('./player')
const { getSheets } = require('./sheet')

const initGame = async (opts) => {
  const game = await Game.create({ status: 'open' })
  const player = await Player.create({
    'game_id': game.uuid,
    isHost: true
  })
  return {
    game,
    players: [player],
  }
}

const getGame = async (id, opts) => {
  // get model by id from sequelize
  const game = await Game.findByPk(id)
  return game
}

const startGame = async (id, opts) => {
  try {

    const game = await Game.findByPk(id)
    game.status = 'active'
    const activeGame = await game.save()

    const players = await getPlayers(id)

    const fullPlayers = []

    // start a sheet for each player
    for (let i = 0; i < players.length; i++) {
      const player = players[i]
      const createSheet = async player => {
        const sheet = await Sheet.create({
          game_id: id
        })
        const nextPlayerIndex = (i + 1) % players.length
        player.nextPlayer_id = players[nextPlayerIndex].uuid
        await player.save()
        fullPlayers.push({
          ...player.toJSON(),
          queue: [sheet]
        })
      }
      await createSheet(player)
    }

    const sheets = await getSheets(id)
    return {
      game: activeGame, players: fullPlayers, sheets
    }
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = { initGame, getGame, startGame }