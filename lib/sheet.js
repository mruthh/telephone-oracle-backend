const { Sheet } = require('../db/models/Sheet')
const { getLines } = require('./line')

const getSheets = (gameId, opts = {}) => {
  return Sheet.findAll({
    where: { game_id: gameId },
    ...opts
  })
}


/**
 * Get all sheets and all lines for each sheet
 * @param {String} id  - game uuid
 */
const getFullSheets = async (id) => {
  const fullSheets = []

  const sheets = await getSheets(id, { raw: true })

  for (let sheet of sheets) {
    const lines = await getLines(sheet.uuid, { raw: true })
    fullSheets.push({ ...sheet, lines })
  }
  return fullSheets
}

module.exports = { getSheets, getFullSheets }