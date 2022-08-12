const { sequelize } = require('./db')
const { Game } = require('./models/Game')
const { Player } = require('./models/Player')
const { Sheet } = require('./models/Sheet')
const { Line } = require('./models/Line')

Game.hasMany(Player)
Player.belongsTo(Game)

Game.hasMany(Sheet)
Sheet.belongsTo(Game)

Sheet.hasMany(Line)
Line.belongsTo(Sheet)

sequelize.sync({ alter: true })