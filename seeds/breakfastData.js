const Breakfast = require('../models/Breakfast');

const brkfstdata = [
  {
    name: 'TestFood1',
    calories: 430,
    fats: 10,
    carbs: 45,
    user_id: 1,
  },
  {
    name: 'TestFood2',
    calories: 630,
    fats: 20,
    carbs: 65,
    user_id: 1,
  },
  {
    name: 'TestFood3',
    calories: 130,
    fats: 5,
    carbs: 25,
    user_id: 3,
  },
];

const seedBreakfast = () => Breakfast.bulkCreate(brkfstdata);

module.exports = seedBreakfast;