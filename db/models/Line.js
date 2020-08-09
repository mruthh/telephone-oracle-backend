const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../db')

const { Player } = require('./Player')
const { Sheet } = require('./Sheet')

class Line extends Model {}

Line.init({
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  order: {
    type: DataTypes.INTEGER
  },
  player_id: {
    type: DataTypes.UUID,
    model: Player,
    key: 'uuid'
  },
  sheet_id: {
    type: DataTypes.UUID,
    model: Sheet,
    key: 'uuid'
  },
  text: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  modelName: 'Line'
})

module.exports = { Line }