'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordhash: DataTypes.STRING,
    resume: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    Student.hasMany(models.Smedia);
  };
  return Student;
};