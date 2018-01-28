const order = require('./order/order.service.js');
const customer = require('./customer/customer.service.js');
module.exports = function (app) {
  app.configure(order);
  app.configure(customer);
};
