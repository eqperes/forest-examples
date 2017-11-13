'use strict';
var liana = require('forest-express-sequelize');

liana.collection('customers', {
  actions: [
    { name: 'Block account' },
  ]
});
