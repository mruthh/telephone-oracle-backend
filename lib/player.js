const { Player } = require('../db/models/Player')

const getPlayers = async (gameId, opts = {}) => {
  const players = await Player.findAll({ where: { game_id: gameId } }, opts)
  return players
}

const createPlayer = (gameId) => {
  return Player.create({ game_id: gameId })
}


module.exports = { getPlayers, createPlayer }