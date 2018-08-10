'use strict';
module.exports = (sequelize, DataTypes) => {
  var Smedia = sequelize.define('Smedia', {
    linkedin: DataTypes.STRING,
    github: DataTypes.STRING,
    portfolio: DataTypes.STRING
  }, {});
  Smedia.associate = function(models) {
    // associations can be defined here
    Smedia.belongsTo(models.Student,
    {
      onDelete: "CASCADE",
      foreignKey:{
        allowNull: false
      }
    });
  };
  return Smedia;
};