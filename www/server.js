'use strict';

const http = require('http');
const app = require('./app');
const env = require('../config/env.js');
const config = require('../config');
const debug = require('debug')('skill');

const server = http.createServer(app);
debug(`Attempting to start.\r\n\tNode version: ${process.version}\r\n\tNODE_ENV: ${env}`);

server.listen(config.server.port, () => {
  debug('Server listening on port %d.', config.server.port);
});
