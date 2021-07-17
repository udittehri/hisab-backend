const express = require('express');
const router = express.Router();

const TransactionController = require('./controller');

router.post('/create', TransactionController.create)
// router.post('/add',AuthController.register)
// router.post('/updatePassword',AuthController.updatePassword)

module.exports = router;