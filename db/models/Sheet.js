const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../db')
const { Game } = require('./Game')
const { Player } = require('./Player')

class Sheet extends Model {}

Sheet.init({
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  game_id: {
    type: DataTypes.UUID,
    model: Game,
    key: 'uuid'
  },
  active_player_id: {
    type: DataTypes.UUID,
    model: Player,
    key: 'uuid'
  },
  lineCount: {
    type: DataTypes.INTEGER(3),
    defaultValue: 0
  }
}, {
  sequelize,
  modelName: 'Sheet'
})

module.exports = { Sheet }