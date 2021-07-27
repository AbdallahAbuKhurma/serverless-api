'use strict';

const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  age: Number,
});

const peopleModel = dynamoose.model('people', peopleSchema);

module.exports = peopleModel;
