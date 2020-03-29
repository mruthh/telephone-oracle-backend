const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../db')


class Sheet extends Model {}

Sheet.init({}, {
  sequelize,
  modelName: 'Sheet'
})

module.exports = { Sheet }