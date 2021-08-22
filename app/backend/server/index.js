const cors = require('cors');
const express = require('express');

const db = require('../database');
const accountsProcessor = require('../processor/accountsProcessor');
const accountsApi = require('../api/accounts');

const app = express();

const PORT = process.env.PORT || 1337;

// to support JSON-encoded bodies
app.use(express.json());

app.use(cors({
  origin: '*',
}));

// to support URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({ force: true }).then(() => {
  accountsProcessor();

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);

    accountsApi(app);
  });
});
