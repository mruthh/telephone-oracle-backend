const Sequelize = require('sequelize')

const mysql2 = require('mysql2')

const sequelize = new Sequelize(
  'telephone_oracle',
  'telephone',
  process.env.MYSQL_PASSWORD, {
    dialect: 'mysql',
    dialectModule: mysql2,
    host: 'localhost',
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