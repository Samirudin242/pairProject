'use strict';
const courseProvider = require('../file/courseProvider.json')
courseProvider.forEach((director) => {
  director.createdAt = new Date();
  director.updatedAt = new Date();
})

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('CourseProviders', courseProvider, {})

  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('CourseProviders', null, {});

  }
};
