const User = require('./User')
const Breakfast = require('./Breakfast')
const Lunch = require('./Lunch')
const Dinner = require('./Dinner')
const Snacks = require('./Snacks')


User.hasMany(Breakfast, {
    foreignKey: 'user_id'
})

Breakfast.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Lunch, {
    foreignKey: 'user_id'
})

Lunch.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Dinner, {
    foreignKey: 'user_id'
})

Dinner.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Snacks, {
    foreignKey: 'user_id'
})

Snacks.belongsTo(User, {
    foreignKey: 'user_id'
})
module.exports = {User, Lunch, Dinner, Snacks, Breakfast}