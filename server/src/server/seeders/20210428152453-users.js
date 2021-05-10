'use strict';
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Buyer',
          lastName: 'Buyerovich',
          displayName: 'buyer',
          passwordHash: await bcrypt.hashSync('Test1234', SALT_ROUNDS),
          email: 'buyer@mail.com',
          role: 'customer',
          balance: 4750
        },
        {
          firstName: 'Creator',
          lastName: 'Creatorvich',
          displayName: 'creator',
          passwordHash: await bcrypt.hashSync('Test1234', SALT_ROUNDS),
          email: 'creator@mail.com',
          role: 'creator',
          balance: 150
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
