const express = require('express');
const router = express.Router();

const AuthRoutes = require('./../../services/auth');
const XOXORoutes = require('./../../services/xoxo')
const TransactionsRoutes = require('./../../services/transactions')
//New 

router.use('/auth', AuthRoutes)
router.use('/xoxo', XOXORoutes)
router.use('/transaction', TransactionsRoutes)
// router.use('/user', UserRoutes)

// router.use('/leave', LeaveRoutes) //Apply Middleware token 
// router.use('/holiday', HolidayRoutes)



module.exports = router;