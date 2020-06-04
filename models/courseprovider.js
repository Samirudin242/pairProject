'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class CourseProvider extends Model {}
  CourseProvider.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    LeaderId: DataTypes.INTEGER
  }, {sequelize});
  CourseProvider.associate = function(models) {
    // associations can be defined here
    CourseProvider.belongsTo(models.Leader)
  };
  return CourseProvider;
};