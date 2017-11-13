'use strict';
const P = require('bluebird');
const express = require('express');
const router = express.Router();
const liana = require('forest-express-sequelize');
const models = require('../models');

router.post('/actions/block-account', liana.ensureAuthenticated,
  (req, res) => {

    // Get the list of selected customer ids from the Forest UI.
    const selectedCustomersIds = req.body.data.attributes.ids;

    // Retrieve all customers data from the database.
    return models.customers
      .findAll({
        id: selectedCustomersIds
      })
      // Iterate over all the customers and block accounts.
      .then(customers => {
        return P
          .each(customers, customer => {
            // Business logic to block the customer here.
            // Probably something like that:
            //     customer.status = 'banned';
            //     return customer.save();
          });
      })
      // Success
      .then(() => {
        res.status(204).send();
      })
      // Error
      .catch(() => {
        res.status(400).send({ error: 'Oops, something went wrong!' });
      });
  });

module.exports = router;
