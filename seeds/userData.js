const User = require('../models/User');

const userdata = [
  {
    id: 1,
    username: 'TestUser1',
    password: 'Password123',
    calorie_goal: 2000,
  },
  {
    id: 2,
    username: 'TestUser2',
    password: 'Password123',
    calorie_goal: 2500,
  },
  {
    id: 3,
    username: 'TestUser3',
    password: 'Password123',
    calorie_goal: 1500,
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;