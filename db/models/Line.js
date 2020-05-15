const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../db')

class Line extends Model {}

Line.init({
  //line.text is a field here
}, {
  sequelize,
  modelName: 'Line'
})

module.exports = { Line }