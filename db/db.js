const Sequelize = require('sequelize')

const sqlite3 = require('sqlite3')

const sequelize = new Sequelize('database', null, null, {
  dialect: 'sqlite',
  dialectModule: sqlite3,
  storage: ':memory:'
})

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = { sequelize }