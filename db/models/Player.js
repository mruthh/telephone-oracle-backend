const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../db')

class Player extends Model {}

Player.init({
  isHost: {
    type: Boolean,
    defaultValue: false
  }
}, {
  sequelize,
  modelName: 'Player'
})

module.exports = { Player }