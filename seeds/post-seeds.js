const { Post } = require('../models');

const postdata = [
  {
    title: 'Flying bisons are better',
    user_id: 1
  },
  {
    title: 'Dragons go faster',
    user_id: 2
  },
  {
    title: 'Teleportation jutsu my guy',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;