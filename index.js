'use strict';

exports.http = (request, response) => {
  console.log('Hello from "HTTP"');
  response.status(200).send('Hello World!');
};

exports.event = (event, callback) => {
  console.log('Hello from an "event" event');
  callback();
};
