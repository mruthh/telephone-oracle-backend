const { Player } = require('./db/models/Player')
const { getSheets } = require('./sheet'
)
const getPlayers = async (gameId) => {

  let players = await Player.findAll({ where: { game_id: gameId } })

  // get sheets (TODO: only if active game)
  const sheets = await getSheets(gameId)
  
}

const createPlayer = (gameId) => {
  return Player.create({ game_id: gameId })
}


module.exports = { getPlayers, createPlayer }