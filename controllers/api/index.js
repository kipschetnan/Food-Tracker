const router = require('express').Router()
const userRoutes = require('./user-routes')
const foodRoutes = require('./food-routes');

router.use('/users', userRoutes)
router.use('/foods', foodRoutes);

module.exports = router