'use strict';

const uuid = require('uuid').v4;
const peopleModel = require('./people.schema');

exports.handler = async (event) => {
  try {
    const {firstName, lastName, age} = JSON.parse(event.body);
    const id = uuid();
    const docs = new peopleModel({id, firstName, lastName, age});
    const data = await docs.save();
    return {
      status: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};
