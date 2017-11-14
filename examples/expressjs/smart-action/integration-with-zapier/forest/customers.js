'use strict';
var liana = require('forest-express-sequelize');

liana.collection('customers', {
  actions: [{
    name: 'Dispatch Order',
    fields: [{
      field: 'Deliveryman',
      description: 'Choose the delivery man to dispatch this order.',
      type: 'String',
      reference: 'delivery_men.id'
    }]
  }]
});
