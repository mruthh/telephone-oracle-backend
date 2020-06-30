const { Player } = require('../db/models/Player')

const getPlayers = async (gameId, opts = {}) => {
  const players = await Player.findAll({ where: { game_id: gameId } }, opts)
  return players
}

const createPlayer = async (gameId) => {
  const player = await Player.create({ game_id: gameId })
  return player
}


module.exports = { getPlayers, createPlayer }