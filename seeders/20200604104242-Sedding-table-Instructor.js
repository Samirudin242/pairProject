'use strict';
const Instructors = require('../file/instructor.json')
Instructors.forEach((director) => {
  director.createdAt = new Date();
  director.updatedAt = new Date();
})

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Instructors', Instructors, {})

  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Instructors', null, {});

  }
};
