const db = require('../database');
const Account = db.Account;
const Op = db.Sequelize.Op;

const __getPagination = (page = 0, size = 0) => {
  const limit = size || 10;
  const offset = page ? (page * limit) : 0; // Page Count * Amount per page

  return { limit, offset };
};

const __getPagingData = (data, page, limit) => {
  const { count, rows } = data;
  const currentPage = page || 0;
  const totalPages = Math.ceil(count / limit);

  return {
    totalItems: count,
    accounts: rows,
    totalPages,
    currentPage,
  };
};

const list = (req, res) => {
  const { page, size } = req.body;
  const { limit, offset } = __getPagination(page, size);

  return Account.findAndCountAll({
    limit, //quantity of items to return
    offset, // quantity of items to skip
    where: {},
  })
    .then((data) => {
      const pagingData = __getPagingData(data, page, limit);
      res.status(200).send(pagingData);
    })
    .catch((error) => {
      res.status(error.status || 404)
        .json({
          message: error.message,
          status: error.status,
        })
        .end();
    });
};

const getStatistics = async (req, res) => {
  try {
    const lowAccounts = await Account.findAndCountAll({
      where: { status: 'low' },
    });

    const mediumAccounts = await Account.findAndCountAll({
      where: { status: 'medium' },
    });

    const highAccounts = await Account.findAndCountAll({
      where: { status: 'high' },
    });

    const statistics = {
      counts: {
        low: lowAccounts.count,
        medium: mediumAccounts.count,
        high: highAccounts.count,
      }
    };

    res.status(200).send(statistics);
  } catch (error) {
    res.status(error.status || 404)
      .json({
        message: error.message,
        status: error.status,
      })
      .end();
  }
};

module.exports = {
  list,
  getStatistics,
};
