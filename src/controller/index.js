const express = require('express');

const search = require('./search');

const { client, server } = require('./error');

const router = express.Router();

router.post('/search', search.post);

router.use(client);

router.use(server);

module.exports = router;
