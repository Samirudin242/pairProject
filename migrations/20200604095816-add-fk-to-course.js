'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addConstraint('Courses', {
      fields: ['IntructorId'],
      type: 'foreign key',
      name: 'custom_fkey_IntructorId',
      references: { 
        table: 'Instructors',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
    .then(() => {
      return queryInterface.addConstraint('Courses', {
        fields: ['ParticipantId'],
        type: 'foreign key',
        name: 'custom_fkey_ParticipantId',
        references: { 
          table: 'Participants',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.removeConstraint('Courses', 'custom_fkey_IntructorId', {})
    .then(() => {
      return queryInterface.removeConstraint('Courses', 'custom_fkey_ParticipantId', {})
    })
  }
};
