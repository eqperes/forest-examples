// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const order = sequelizeClient.define('order', {
    delivery_address: { type: DataTypes.STRING }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    },
    tableName: 'orders',
    underscored: true
  });

  order.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/

    order.belongsTo(models.customer);
  };

  return order;
};
