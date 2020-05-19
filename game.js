const { Game } = require('./db/models/Game')
const { Player } = require('./db/models/Player')
const { Sheet } = require('./db/models/Sheet')
const { getPlayers } = require('./player')
const { getSheets } = require('./sheet')

const initGame = async (opts) => {
  const game = await Game.create()
  const player = await Player.create({
    'game_id': game.uuid,
    isHost: true
  })
  return {
    player,
    game: {
      ...game.toJSON(),
      players: [player]
    }
  }
}

const getGame = async (id, opts) => {
  // get model by id from sequelize
  const game = Game.findById(id)
  const players = getPlayers(id)
  await Promise.all([game, players])
  return { game, players }
}

const startGame = async (id, opts) => {
  const game = await Game.findByPk(id)
  if (!game) throw new Error('game not found')
  // set status to active
  game.set({ status: 'active' })


  const players = await getPlayers(id)

  const fullPlayers = []

  // start a sheet for each player
  for (let i = 0; i < players.length; i++) {
    const player = players[i]
    const createSheet = async player => {
      const sheet = await Sheet.create({
        game_id: id,
        active_player_id: player.uuid
      })
      const nextPlayerIndex = (i + 1) % players.length
      fullPlayers.push({
        ...player.toJSON(),
        queue: [sheet],
        nextPlayerId: players[nextPlayerIndex]
      })
    }
    await createSheet(player)
  }



  const sheets = await getSheets(id)
  return {
    game, players: fullPlayers, sheets
  }
}

module.exports = { initGame, getGame, startGame }