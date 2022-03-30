const { check } = require('express-validator');

const dealershipSchema = [
  check('name', 'Please add name').not().isEmpty(),
  check('location', 'Please add location').not().isEmpty(),
  check('phone', 'Please phone number').not().isEmpty(),
];

const inventorySchema = [check('name', 'Please add name').not().isEmpty()];

module.exports = dealershipSchema
