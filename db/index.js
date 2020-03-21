const Sequelize = require('sequelize')
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: ':memory:'
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}