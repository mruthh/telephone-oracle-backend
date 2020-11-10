const Sequelize = require('sequelize')

const mysql = require('mysql')

// TODO: actually create the database if none exists!!

const sequelize = new Sequelize('database', 'telephone', process.env.MYSQL_PASSWORD, {
  dialect: 'mysql',
  dialectModule: mysql,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
})

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = { sequelize }