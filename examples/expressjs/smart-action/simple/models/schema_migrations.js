'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('schema_migrations', {
    version: {
      type: DataTypes.STRING,
      primaryKey: true 
    },
  }, {
    tableName: 'schema_migrations',
    
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

