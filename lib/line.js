const { Line } = require('../db/models/Line')
const { Player } = require('../db/models/Player')

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

  // get next player id
  const player = await Player.findByPk(playerId)
  
  // return info needed for a sheet pass event
  return { line, fromPlayerId: playerId, toPlayerId: player.nextPlayer_id }
}

module.exports = { getLastLine, addLine }