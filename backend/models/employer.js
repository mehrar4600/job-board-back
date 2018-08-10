'use strict';
module.exports = (sequelize, DataTypes) => {
  var Employer = sequelize.define('Employer', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordhash: DataTypes.STRING,
    company_name: DataTypes.STRING
  }, {});
//   Employer.associate = function(models) {
//     // associations can be defined here
//     Employer.hasMany(models.job);
//   };
  return Employer;
};