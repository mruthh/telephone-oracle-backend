const { Game } = require('./db/models/Game')
const { Player } = require('./db/models/Player')
const { randomBytes } = require('crypto')


const openGame = async (opts) => {
  const hash = randomBytes(16).toString('hex');
  const game = await Game.create({ hash })
  const player = await Player.create({ isHost: true })
  game.setHost(player)
  return { player: player.toJSON(), game: game.toJSON() }
}

module.exports = { openGame }