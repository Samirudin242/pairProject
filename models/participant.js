'use strict';
module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define('Participant', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Participant.associate = function(models) {
    // associations can be defined here
  };
  return Participant;
};