/* eslint-disable import/no-unresolved */
const { join } = require('path');
const express = require('express');
const compression = require('compression');

const router = require('./controller');

const app = express();

app.set('port', process.env.PORT || 3000);

app.disable('x-powerd-by');

app.use(compression());
app.use(express.static(join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

module.exports = app;
