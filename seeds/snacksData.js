const Snacks = require('../models/Snacks');

const snackData = [
  {
    name: 'Chips',
    calories: 20,
    fats: 5,
    carbs: 10,
    user_id: 1
  },
  {
    name: 'Cookie',
    calories: 25,
    fats: 10,
    carbs: 5,
    user_id: 2
  },
  {
    name: 'Granola Bar',
    calories: 15,
    fats: 7,
    carbs: 10,
    user_id: 3
  },
];

const seedSnacks = () => Snacks.bulkCreate(snackData);

module.exports = seedSnacks;