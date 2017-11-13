'use strict';

module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.define('chef', {
    firstname: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING }
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'chefs',
    underscored: true
  });

  return Model;
};
