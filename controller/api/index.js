// serves to collect all the API routes and package them up
const router = require('express').Router();

const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router; 