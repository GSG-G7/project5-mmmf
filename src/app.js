const { join } = require('path');
const express = require('express');
const compression = require('compression');

const router = require('./controllers');

const app = express();

app.set('port', process.env.PORT || 3000);

app.disable('x-powered-by');

app.use(compression());
app.use(express.static(join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

module.exports = app;
