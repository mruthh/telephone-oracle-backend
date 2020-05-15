import { Sheet } from './db/models/Sheet'

const getSheets = (gameId) => {
  return Sheet.findAll({ where: { game_id: gameId }})
}

module.exports = { getSheets }