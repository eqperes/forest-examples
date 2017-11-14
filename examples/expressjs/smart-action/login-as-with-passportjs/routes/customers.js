'use strict';
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const liana = require('forest-express-sequelize');
const models = require('../models');

router.get('/actions/impersonate', (req, res) => {
  // Decode the JWT token.
  var payload = jwt.verify(req.query.token, process.env.IMPERSONATE_SECRET_KEY);

  // Fetch the user from the database.
  models.customers
    .findById(payload.customerId)
    .then((customer) => {
      // Impersonate the user using Passport.js and redirect to the root of
      // the application.
      req.login(customer, () => res.redirect('/'));
    });
});

router.post('/actions/login-as', liana.ensureAuthenticated,
  (req, res) => {

    // Get the first selected customer id from the Forest UI.
    const selectedCustomerId = req.body.data.attributes.ids[0];

    // Retrieve the customer data from the database.
    return models.customers
      .findById(selectedCustomerId)
      .then(customer => {
        // Build the payload of the JWT token
        var payload = {
          customerId: customer.id,
          adminEmail: req.user.data.email,
          adminTeams: req.user.data.teams,
        };

        // Generate the token using a random secret key
        var token = jwt.sign(payload, process.env.IMPERSONATE_SECRET_KEY);

        // Respond with the URL
        res.json({
          html: '<a href="http://localhost:3000/forest/actions/impersonate?token=' +
            token + '" target="_blank">Click here to be logged as ' +
            customer.firstname + '</a>'
        });

      })
      // Error
      .catch(() => {
        res.status(400).send({ error: 'Oops, something went wrong!' });
      });
  });

module.exports = router;
