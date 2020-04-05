const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../db')
const { Game } = require('./Game')

class Player extends Model {}

Player.init({
  isHost: {
    type: Boolean,
    defaultValue: false
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  game_id: {
    type: DataTypes.UUID,
    model: Game,
    key: 'uuid'
  }
}, {
  sequelize,
  modelName: 'Player'
})

module.exports = { Player }