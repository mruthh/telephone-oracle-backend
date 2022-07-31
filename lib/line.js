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

// gets the id of the next active player
// TODO: prevent infinite recursion if no players are active
const getNextPlayerId = async (player, initialPlayerId) => {
  // If we have made our way through the entire list and all players are inactive, return the id of the initial player (usually, the player who submitted the line) to avoid an infinite loop.
  if (nextPlayerId === initialPlayerId) return initialPlayerId
  
  nextPlayerId = player.nextPlayer_id

  const nextPlayer = await Player.findByPk(playerId)
  return nextPlayer.active 
    ? player.nextPlayerId 
    : getNextPlayerId(nextPlayer, initialPlayerId)
}

const addLine = async (params) => {
  const { playerId, sheetId, text } = params

  const sheet = await Sheet.findByPk(sheetId)

  // get line order value
  const prevLineCount = await Line.count({ where: { sheet_id: sheetId } })
  const order = prevLineCount + 1 // we use 1-based order for lines

  // save line
  const line = await Line.create({
    player_id: playerId,
    sheet_id: sheetId,
    text,
    order
  })

  // check if sheet is complete before determining next player

  const game = await Game.findByPk(sheet.game_id)

  let nextPlayerId = null
  const lineCount = prevLineCount + 1

  // if this is line 9 or below and our game length is 10, our sheet is not complete
  if (lineCount < game.length) {
    // if sheet is not complete, get next player id
    const player = await Player.findByPk(playerId)
    
    nextPlayerId = getNextPlayerId(player, player.uuid)
  }
  // save next player info to sheet
  sheet.active_player_id = nextPlayerId

  await sheet.save()

  return line
}

const getLines = async (sheetId, opts = {}) => {
  const lines = await Line.findAll({
    where: { sheet_id: sheetId },
    order: [
      ['order', 'ASC']
    ],
    ...opts
  })
  return lines
}

module.exports = { getLastLine, addLine, getLines }