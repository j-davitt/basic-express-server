'use strict';

const express = require('express');
const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req,res,next) => {
  res.status(200).send('welcome');
});

app.get('/person', validator, (req,res,next) => {

  if(!req.query.name){
    next();
    return;
  }
  let output = { name: req.query.name };

  res.status(200).json(output);
});

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));

}

app.use('*', notFound);
app.use(errorHandler);

module.exports = { start, app };

