'use strict';
const P = require('bluebird');
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const liana = require('forest-express-sequelize');
const models = require('../models');

router.post('/actions/dispatch-order', liana.ensureAuthenticated,
  (req, res) => {
    // Get the first selected customer id from the Forest UI.
    const customerId = req.body.data.attributes.ids[0];

    // Get the delivery man ID from the action form when the user clicks on the
    // action in the Forest UI.
    const deliveryManId = req.body.data.attributes.values.Deliveryman;

    models.customers
      .findById(customerId, {
        include: {
          model: models.orders
        }
      })
      .then(customer => {
         return P.each(customer.orders, order => {
           order = order.toJSON();

           // TODO: Put a working Zapier Hook URL here.
           // Example:

           //return fetch('https://hooks.zapier.com/hooks/catch/XXX/YYY', {
             //method: 'POST',
             //body: JSON.stringify({
               //delivery_address: order.delivery_address,
               //customerId: customerId,
               //deliveryManId: deliveryManId
             //}),
             //headers: { 'Content-Type': 'application/json' },
           //});
         });
      })
      .then(() => {
        res.status(204).send();
      });


  });

module.exports = router;
