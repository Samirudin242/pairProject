'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class Leader extends Model {
    getFullName() {
      return `${this.first_name} ${this.last_name}`
    }
  }
  Leader.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {sequelize});
  Leader.associate = function(models) {
    // associations can be defined here
    Leader.hasOne(models.CourseProvider)
  };
  return Leader;
};