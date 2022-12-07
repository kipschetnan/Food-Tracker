const Lunch = require('../models/Lunch');

const lunchData = [
  {
    name: 'Pasta',
    calories: 500,
    fats: 30,
    carbs: 50,
    user_id: 1
  },
  {
    name: 'Burrito',
    calories: 700,
    fats: 50,
    carbs: 65,
    user_id: 2
  },
  {
    name: 'Sandwich',
    calories: 450,
    fats: 25,
    carbs: 30,
    user_id: 3
  },
];

const seedLunch = () => Lunch.bulkCreate(lunchData);

module.exports = seedLunch;