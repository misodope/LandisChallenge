const cors = require('cors');
const express = require('express');

const db = require('../database');
const accountsProcessor = require('../processor/accountsProcessor');
const accountsApi = require('../api/accounts');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 1337;

// to support JSON-encoded bodies
app.use(express.json());

app.use(cors({
  origin: '*',
}));

// to support URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../frontend/dist')));
  app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../../frontend/index.html'));
  });
}

db.sequelize.sync({ force: true }).then(() => {
  accountsProcessor();

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log('dist path', path.join(__dirname, '../../frontend/dist'));
    accountsApi(app);
  });
});
