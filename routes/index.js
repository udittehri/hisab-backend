const express = require('express');
const router = express.Router();

const apiRoutes = require('./apis');

router.use('/api', apiRoutes)

module.exports = router;