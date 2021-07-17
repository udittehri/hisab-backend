const express = require('express');
const router = express.Router();

const AuthRoutes = require('./../../services/auth');
//New 

router.use('/auth', AuthRoutes)
// router.use('/user', UserRoutes)

// router.use('/leave', LeaveRoutes) //Apply Middleware token 
// router.use('/holiday', HolidayRoutes)



module.exports = router;
