'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('CourseProviders', {
      fields: ['LeaderId'],
      type: 'foreign key',
      name: 'custom_fkey_LeaderrId',
      references: { 
        table: 'Leaders',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('CourseProviders', 'custom_fkey_LeaderrId', {})
  }
};
