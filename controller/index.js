/* Express routes take requests, communicate with the Models, 
and will eventually respond with a View */
const router = require('express').Router();

const apiRoutes = require('./api');
/* main homepage route */
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
// collects all the api endpoints and pre-fixes as /api
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;