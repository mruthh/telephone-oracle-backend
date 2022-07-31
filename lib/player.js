const { Player } = require('../db/models/Player')
const { Sheet } = require('../db/models/Sheet')
const { Game } = require('../db/models/Game')
const { passSheet } = require('./line')

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
    const player = await Player.findByPk(id)

    // we only allow name updates so far
    if (params.name) {
      player.name = params.name
    }
    
    if ('active' in params) {
      player.active = params.active

      const game = await Game.findByPk(player.game_id)
      // if we are deactivating a player during a game, find all sheets where that player is the active player and pass them
      if (!params.active && game.status === 'active') {
        const sheetsToUpdate = await Sheet.findAll({ where: { active_player_id: id }})
        const promises = []
        for (const sheet of sheetsToUpdate) {
          promises.push(passSheet({ playerId: id, sheet }))
        }
        await Promise.all(promises)
      }
    }

    await player.save()
    
    return player
}


module.exports = { getPlayers, createPlayer, updatePlayer }