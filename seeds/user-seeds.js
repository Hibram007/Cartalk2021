const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'lastairbender',
    email: 'aang@airtemple.com',
    password: 'passwordair'
  },
  {
    username: 'jonnyboysnow',
    email: 'winterfell@gmail.com',
    password: 'passwordsnow'
  },
  {
    username: 'jiraiyaboy',
    email: 'pervysage@hiddenleaf.com',
    password: 'passwordrasengan'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;