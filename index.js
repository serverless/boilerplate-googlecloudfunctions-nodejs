'use strict';

exports.http = (request, response) => {
  console.log('Hello from "http"');
  response.status(200).send('Hello World!');
};

exports.event = (event, callback) => {
  console.log('Hello from "event"');
  callback();
};
