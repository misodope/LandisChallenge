const account = (sequelize, Sequelize) => {
  const Account = sequelize.define("account", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    balance: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    credit: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    picture: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    comments: {
      type: Sequelize.TEXT,
    },
    tags: {
      type: Sequelize.JSON,
      defaultValue: [],
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'low',
      allowNull: false,
    }
  });

  return Account;
};

module.exports = account;
