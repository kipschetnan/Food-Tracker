const router = require('express').Router();
const userApiRoutes = require('./api/user-routes.js');
const homeRoutes = require('./home-routes.js');
const foodApiRoutes = require('./api/food-routes.js');

router.use('/', homeRoutes);
router.use('/api/users', userApiRoutes);
router.use('/api/foods', foodApiRoutes);

module.exports = router;