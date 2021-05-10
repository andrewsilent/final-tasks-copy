const { Transaction } = require('../models');

module.exports.saveTransaction = async (req, res, next) => {
  try {
    const {
      body: { sum },
      target,
      operationType,
    } = req;

    await Transaction.create({
      userId: target,
      operationType: operationType,
      sum: sum,
    });

    next();
  } catch (error) {
    next(error);
  }
};
