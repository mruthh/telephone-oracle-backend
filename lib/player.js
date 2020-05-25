const { Player } = require('../db/models/Player')
const { Sheet } = require('../db/models/Sheet')
const getPlayers = async (gameId, opts = {}) => {
  const players = await Player.findAll({ where: { game_id: gameId } })
  if (!opts.sheets) return players

  const fullPlayers = []

  players.forEach(async player => {
    const sheets = await Sheet.findAll({
      where: { active_player_id: player.uuid },
      order: ['createdAt', 'ASC']
    })
    fullPlayers.push({ ...player.toJSON(), queue: sheets })
  })

  return fullPlayers
}

const createPlayer = (gameId) => {
  return Player.create({ game_id: gameId })
}


module.exports = { getPlayers, createPlayer }