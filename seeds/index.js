const sequelize = require('../config/connection');
const seedPosts = require('./postData');
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