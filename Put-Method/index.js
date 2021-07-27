'use strict';

const peopleModel = require('./people.schema');

exports.handler = async (event) => {
  try {
    const id = event.pathParameters.id;
    const {firstName, lastName, age} = JSON.parse(event.body);
    // const results = await peopleModel.query('id').eq(id).exec();
    const data = peopleModel.update({'id': id}, {firstName: firstName, lastName: lastName, age: age});
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