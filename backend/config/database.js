const Sequelize = require('sequelize');

const sequelize = new Sequelize('notesnana', 'admin', 'nana', {
  host: '34.135.131.201',
  dialect: 'mysql',
  port: 3000
});
