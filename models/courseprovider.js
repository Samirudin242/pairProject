'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseProvider = sequelize.define('CourseProvider', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    LeaderId: DataTypes.INTEGER
  }, {});
  CourseProvider.associate = function(models) {
    // associations can be defined here
  };
  return CourseProvider;
};