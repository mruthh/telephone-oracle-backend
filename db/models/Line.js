const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../db')

class Line extends Model {}

Line.init({}, {
  sequelize,
  modelName: 'Line'
})

module.exports = { Line }