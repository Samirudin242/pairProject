'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.addConstraint('Instructors', {
    fields: ['CourseId'],
    type: 'foreign key',
    name: 'custom_fkey_CourseId',
    references: { 
      table: 'CourseProviders',
      field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.removeConstraint('Instructors', 'custom_fkey_CourseId', {})
  }
};
