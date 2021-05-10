'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Offers',
      [
        {
          id: 1,
          userId: 2,
          contestId: 1,
          text: 'Sever',
          fileName: null,
          originalFileName: null,
          status: 'won',
          createdAt: '2021-05-10 08:57:21.008+00',
          updatedAt: '2021-05-10 08:57:55.397+00',
        },
        {
          id: 2,
          userId: 2,
          contestId: 2,
          text: 'pockerFace',
          fileName: null,
          originalFileName: null,
          status: 'won',
          createdAt: '2021-05-10 08:57:35.434+00',
          updatedAt: '2021-05-10 08:58:07.729+00',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Offers', null, {});
  },
};
