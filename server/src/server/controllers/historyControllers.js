const { Transaction } = require('../models');

module.exports.getTransactions = async (req, res, next) => {
  try {
    const {
      tokenData: { userId },
    } = req;

    const transactions = await Transaction.findAll({
      where: { userId: userId },
    });

    res.status(200).send({ data: transactions });
  } catch (error) {
    next(error);
  }
};
