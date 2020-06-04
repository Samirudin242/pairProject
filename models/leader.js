'use strict';
module.exports = (sequelize, DataTypes) => {
  const Leader = sequelize.define('Leader', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {});
  Leader.associate = function(models) {
    // associations can be defined here
  };
  return Leader;
};