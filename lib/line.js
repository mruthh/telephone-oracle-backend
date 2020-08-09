const { Line } = require('../db/models/Line')

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

module.exports = { getLastLine }