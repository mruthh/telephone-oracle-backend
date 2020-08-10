const { Line } = require('../db/models/Line')
const { Player } = require('../db/models/Player')
const { Sheet } = require('../db/models/Sheet')

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
  const sheet = await Sheet.findByPk(sheetId)
  
  // save next player info to sheet
  sheet.active_player_id = player.nextPlayer_id
  await sheet.save()
  
  // return info needed for a sheet pass event
  return line 
}

module.exports = { getLastLine, addLine }