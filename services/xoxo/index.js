const express = require('express');
const router = express.Router();

const XOXOController = require('./controller');

router.post('/add', XOXOController.addXO )
// router.post('/add',AuthController.register)
// router.post('/updatePassword',AuthController.updatePassword)

module.exports = router;
