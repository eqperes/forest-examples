'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('delivery_men', {
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    available: {
      type: DataTypes.BOOLEAN,
    }
  }, {
    tableName: 'delivery_men',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

