'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'TransactionsHistory',
      [
        {
          id: 1,
          userId: 2,
          operationType: 'INCOME',
          sum: 100,
          createdAt: '2021-05-10 08:57:55.415+00',
          updatedAt: '2021-05-10 08:57:55.415+00',
        },
        {
          id: 2,
          userId: 2,
          operationType: 'INCOME',
          sum: 100,
          createdAt: '2021-05-10 08:58:07.748+00',
          updatedAt: '2021-05-10 08:58:07.748+00',
        },
        {
          id: 3,
          userId: 2,
          operationType: 'CONSUMPTION',
          sum: 35,
          createdAt: '2021-05-10 08:59:11.055+00',
          updatedAt: '2021-05-10 08:59:11.055+00',
        },
        {
          id: 4,
          userId: 2,
          operationType: 'CONSUMPTION',
          sum: 15,
          createdAt: '2021-05-10 08:59:26.666+00',
          updatedAt: '2021-05-10 08:59:26.666+00',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TransactionsHistory', null, {});
  },
};
