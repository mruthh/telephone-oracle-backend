const { sequelize } = require('./db')
const { Game } = require('./models/Game')
const { Player } = require('./models/Player')
const { Sheet } = require('./models/Sheet')
const { Line } = require('./models/Line')

Game.hasMany(Player)
sequelize.sync()