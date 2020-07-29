const { Player } = require('../db/models/Player')

const getPlayers = async (gameId, opts = {}) => {
  const players = await Player.findAll({ where: { game_id: gameId } }, opts)
  return players
}

const createPlayer = async (gameId) => {
  const player = await Player.create({ game_id: gameId })
  return player
}

const updatePlayer = async (id, params) => {
  try {
    const player = await Player.findByPk(id)

    // we only allow name updates so far
    player.name = params.name
    await player.save()
  }
  catch(e) { console.error(e) }
  return player
}


module.exports = { getPlayers, createPlayer, updatePlayer }