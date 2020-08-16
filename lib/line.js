const { Line } = require('../db/models/Line')
const { Player } = require('../db/models/Player')
const { Sheet } = require('../db/models/Sheet')
const { Game } = require('../db/models/Game')

const getLastLine = async (sheetId) => {
  try {
    const result = await Line.findAll({
      where: { sheet_id: sheetId },
      order: [
        ['createdAt', 'DESC']
      ],
      limit: 1
    })
    return result.length ? result[0] : {}
  } catch (e) {
    throw new Error(e)
  }
}

const addLine = async (params) => {
  const { playerId, sheetId, text } = params

  // get line order value
  const lineCount = await Line.count({ where: { sheet_id: sheetId } })
  const order = lineCount + 1 // we use 1-based order for lines

  // save line
  const line = await Line.create({
    player_id: playerId,
    sheet_id: sheetId,
    text,
    order
  })

  // check if sheet is complete before determining next player
  const sheet = await Sheet.findByPk(sheetId)
  const game = await Game.findByPk(sheet.game_id)
  
  let nextPlayerId = null

  // if this is line 9 or below and our game length is 10, our sheet is not complete
  if (order < game.length) {
    // if sheet is not complete, get next player id
    const player = await Player.findByPk(playerId)
    nextPlayerId = player.nextPlayer_id
  }
  
  // save next player info to sheet
  sheet.active_player_id = nextPlayerId
  await sheet.save()
  
  return line 
}

module.exports = { getLastLine, addLine }