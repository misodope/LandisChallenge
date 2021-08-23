const express = require('express');
const accountController = require('../controllers/account');

const router = express.Router();

const accountsApi = (app) => {
  router.post('/list', accountController.list);

  router.post('/statistics', accountController.getStatistics);

  app.use('/api/accounts', router);
};

module.exports = accountsApi;