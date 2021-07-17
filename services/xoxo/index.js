const express = require('express');
const router = express.Router();

const AuthController = require ('./controller');

router.post('/add', AuthController.login )
router.post('/add',AuthController.register)
router.post('/updatePassword',AuthController.updatePassword)

module.exports = router;
