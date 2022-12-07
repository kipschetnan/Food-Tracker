const Dinner = require('../models/Dinner');

const dinnerdata = [
  {
    name: 'TestFood1',
    calories: 120,
    fats: 10,
    carbs: 35,
    user_id: 2,
  },
  {
    name: 'TestFood2',
    calories: 430,
    fats: 20,
    carbs: 25,
    user_id: 2,
  },
  {
    name: 'TestFood3',
    calories: 230,
    fats: 15,
    carbs: 25,
    user_id: 3,
  },
];

const seedDinner = () => User.bulkCreate(dinnerdata);

module.exports = seedDinner;