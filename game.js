const { Game } = require('./db/models/Game')
const { Player } = require('./db/models/Player')
const { getPlayers } = require('./player')

const initGame = async (opts) => {
  const game = await Game.create()
  const player = await Player.create({
    'game_id': game.uuid,
    isHost: true
  })
  return { player, game }
}

const getGame = async (id, opts) => {
  // get model by id from sequelize
  const game = Game.findById(id)
  const players = getPlayers(id)
  await Promise.all([game, players])
  return { game, players }
}

module.exports = { initGame, getGame }