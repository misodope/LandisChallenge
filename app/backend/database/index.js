const dbConfig = require('../../config/db.config.js');
const Sequelize = require('sequelize');
const models = require('../models');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

Object.entries(models).forEach(([key, model]) => {
  db[key] = model(sequelize, Sequelize);
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;