'use strict';

const peopleModel = require('./people.schema');

exports.handler = async (event) => {
  try {
    const id = event.pathParameters.id;
    const data = await peopleModel.delete(id);
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