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
  },
  name: {
    type: DataTypes.STRING
  },
  nextPlayer_id
  // there should be an order column. name should default to Player + order
}, {
  sequelize,
  modelName: 'Player'
})

module.exports = { Player }