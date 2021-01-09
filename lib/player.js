const { Player } = require('../db/models/Player')

const getPlayers = async (gameId, opts = {}) => {
  const players = await Player.findAll({ where: { game_id: gameId } }, opts)
  return players
}

const createPlayer = async (gameId, opts = {}) => {
  const { name } = opts
  
  const playerOpts = { game_id: gameId }
  if (name) playerOpts.name = name

  const player = await Player.create(playerOpts)
  return player
}

const updatePlayer = async (id, params) => {
  try {
    const player = await Player.findByPk(id)

    // we only allow name updates so far
    player.name = params.name
    await player.save()
    return player
  }
  catch(e) { console.error(e) }
}


module.exports = { getPlayers, createPlayer, updatePlayer }