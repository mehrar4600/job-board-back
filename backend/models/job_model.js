'use strict';
module.exports = (sequelize, DataTypes) => {
  var Job_Model = sequelize.define('Job_Model', {
    job_title: DataTypes.STRING,
    job_description: DataTypes.STRING,
    job_type: DataTypes.STRING,
    company_name: DataTypes.STRING,
    company_site: DataTypes.STRING,
    company_address: DataTypes.STRING,
    time: DataTypes.STRING,
  
  }, {});
  Job_Model.associate = function(models) {
    // associations can be defined here

  };
  return Job_Model;
};
