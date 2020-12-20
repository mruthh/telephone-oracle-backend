const Sequelize = require('sequelize')

const mysql2 = require('mysql2')

const sequelize = new Sequelize(
  process.env.DBNAME,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD, {
    dialect: 'mysql',
    dialectModule: mysql2,
    host: process.env.DBHOST,
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
})

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = { sequelize }