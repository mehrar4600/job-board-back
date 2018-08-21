'use strict';
module.exports = (sequelize, DataTypes) => {
  var Employer = sequelize.define('Employer', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {type:DataTypes.STRING, unique:true},
    passwordhash: DataTypes.STRING,
    company_name: DataTypes.STRING
  }, {});
  Employer.associate = function(models) {
    // associations can be defined here
    Employer.hasMany(models.Job_Model);
  };
  
  return Employer;
};