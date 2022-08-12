const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../db')
const { Game } = require('./Game')

class Player extends Model {}

Player.init({
  isHost: {
    type: DataTypes.BOOLEAN,
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
  nextPlayer_id: {
    type: DataTypes.UUID,
    model: Player,
    key: 'uuid'
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  sequelize,
  modelName: 'Player'
})

module.exports = { Player }