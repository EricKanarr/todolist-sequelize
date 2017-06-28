'use strict';
module.exports = function(sequelize, DataTypes) {
  var todolist = sequelize.define('todolist', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    priority: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return todolist;
};