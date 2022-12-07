const sequelize = require('../config/connection');
const seedBreakfast = require('./breakfastData');
const seedLunch = require('./lunchData');
const seedDinner = require('./dinnerData');
const seedSnacks = require('./snacksData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  
  await seedBreakfast();

  await seedLunch()

  await seedDinner()

  await seedSnacks()


  process.exit(0);
};

seedAll();