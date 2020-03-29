const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../db')

const Game = require('./Game')
const Line = require('./Line')


class Sheet extends Model {}

Sheet.init({}, {
  sequelize,
  modelName: 'Sheet'
})

module.exports = Sheet