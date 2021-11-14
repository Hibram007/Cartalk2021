const { Comment } = require('../models');
const commentdata = [
  {
    comment_text: 'The elements.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'The winter is better',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'I ride toads, what of it?',
    user_id: 3,
    post_id: 3
  }
];
const seedComments = () => Comment.bulkCreate(commentdata);
module.exports = seedComments;