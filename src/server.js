'use strict';

const express = require('express');

const PORT = process.env.PORT || 3002;

const app = express();

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { start };

console.log('hi from server');
