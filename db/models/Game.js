const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../db')

class Game extends Model {
  // possible game states
  // open = 'open' // host has opened a game but game has not started
  // active = 'active' // game is in progress
  // complete = 'complete' // game is complete
}

Game.init({
  status: {
    type: DataTypes.STRING,
    defaultValue: 'open'
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  }
}, {
  sequelize,
  modelName: 'Game'
})

module.exports = { Game }