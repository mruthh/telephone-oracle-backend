const { Game } = require('./db/models/Game')
const { Player } = require('./db/models/Player')


const openGame = async (opts) => {
  const game = await Game.create()
  const player = await Player.create({ 
    'game_id': game.uuid,
    isHost: true
  })
  return { player: player.toJSON(), game: game.toJSON() }
}

module.exports = { openGame }