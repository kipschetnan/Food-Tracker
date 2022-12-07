const User = require('../models/User');

const userdata = [
  {
    id: 1,
    username: 'TestUser1',
    password: 'Password123',
  },
  {
    id: 2,
    username: 'TestUser2',
    password: 'Password123',
  },
  {
    id: 3,
    username: 'TestUser3',
    password: 'Password123',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;