'use strict';
const leaders = require('../file/leader.json')
leaders.forEach((director) => {
  director.createdAt = new Date();
  director.updatedAt = new Date();
})

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Leaders', leaders, {})

  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Leaders', null, {});

  }
};
