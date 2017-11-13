'use strict';
const P = require('bluebird');
const express = require('express');
const router = express.Router();
const liana = require('forest-express-sequelize');
const models = require('../models');

router.post('/actions/send-email', liana.ensureAuthenticated,
  (req, res) => {

    // Get the list of selected customer ids from the Forest UI.
    const selectedCustomersIds = req.body.data.attributes.ids;

    // Retrieve the form values (Subject and Message).
    const subject = req.body.data.attributes.values.Subject;
    const message = req.body.data.attributes.values.Message;

    // Retrieve all customers data from the database.
    return models.customers
      .findAll({
        id: selectedCustomersIds
      })
      // Iterate over all the customers and send the email.
      .then(customers => {
        return P
          .each(customers, customer => {
            // Send the email to the customer.email here.
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
