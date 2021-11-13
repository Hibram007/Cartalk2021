// import all models
const Vote = require('./vote');
const Review = require('./review');
const User = require('./user');
const Post = require('./Post');
const Comment = require('./Comment');




// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

User.hasMany(Review, {
  foreignKey: 'user_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

User.belongsToMany(Review, {
  through: Vote,
  as: 'voted_reviews',
  foreignKey: 'user_id'
});

Review.belongsToMany(User, {
  through: Vote,
  as: 'voted_reviews',
  foreignKey: 'review_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Review.hasMany(Vote, {
  foreignKey: 'review_id'
});

//comment model associations
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Review, Vote, Comment };