'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate ({ User }) {
      Transaction.belongsTo(User, {
        foreignKey: 'userId',
      });
    }
  }
  Transaction.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      operationType: {
        type: DataTypes.ENUM('INCOME', 'CONSUMPTION'),
        allowNull: false,
      },
      sum: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Transaction',
      tableName: 'TransactionsHistory',
    }
  );
  return Transaction;
};
