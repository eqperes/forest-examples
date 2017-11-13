'use strict';
var liana = require('forest-express-sequelize');

liana.collection('customers', {
  actions: [{
    name: 'Send email',
    fields: [{
      field: 'Subject',
      description: 'The email subject',
      type: 'String',
      isRequired: true
    }, {
      field: 'Body',
      description: 'The email body',
      type: 'String',
      isRequired: true,
      widget: 'text area'
    }]
  }]
});
