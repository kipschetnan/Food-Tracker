const router = require('express').Router();
const userApiRoutes = require('./api/user-routes.js');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api/users', userApiRoutes);

module.exports = router;