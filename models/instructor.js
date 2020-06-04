'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instructor = sequelize.define('Instructor', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    field: DataTypes.STRING,
    CourseId: DataTypes.INTEGER
  }, {});
  Instructor.associate = function(models) {
    // associations can be defined here
  };
  return Instructor;
};