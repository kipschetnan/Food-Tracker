const router = require('express').Router()
const User = require('../models/User')
const Breakfast = require('../models/Breakfast')
const Lunch = require('../models/Lunch')
const Snacks = require('../models/Snacks')
const Dinner = require('../models/Dinner')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

const {format_date, percentage} = require('../utils/helpers')

router.get('/', async (req, res) => {
    try {
        if(req.session.loggedIn) {
            res.redirect('/tracker')
        } else {
            res.render('login')
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/tracker', async (req, res) => {
    console.log(req.session.userId)
    console.log(req.session.calGoal)
    let calorieGoal = 0
    let brkfstCals = 0
    let brkfstFats = 0
    let brkfstCarbs = 0

    let lunchCals = 0
    let lunchFats = 0
    let lunchCarbs = 0

    let dinnerCals = 0
    let dinnerFats = 0
    let dinnerCarbs = 0

    let snacksCals = 0
    let snacksFats = 0
    let snacksCarbs = 0
    const TODAY_START = new Date().setHours(0, 0, 0, 0);
    const NOW = new Date();
    if(req.session.loggedIn) {
        try {
            const brkfstData = await Breakfast.findAll({
                where: {
                    created_at: { 
                      [Op.gt]: TODAY_START,
                      [Op.lt]: NOW
                    },
                },
                include: [
                    {
                        model: User,
                        where: {
                            id: req.session.userId,
                        }
                    }
                ]
            })
            const brkfst = brkfstData.map((brk) => brk.get({ plain: true }))
            brkfst.forEach(brk => {
                calorieGoal += brk.calories
                brkfstCals += brk.calories
                brkfstCarbs += brk.carbs
                brkfstFats += brk.fats
            });
    
            const lunchData = await Lunch.findAll({
                where: {
                    createdAt: { 
                      [Op.gt]: TODAY_START,
                      [Op.lt]: NOW
                    },
                },
                include: [
                    {
                        model: User,
                        where: {
                            id: req.session.userId
                        }
                    }
                ]
            })
            const lunch = lunchData.map((lun) => lun.get({ plain: true }))
            lunch.forEach(lun => {
                calorieGoal += lun.calories
                lunchCals += lun.calories
                lunchCarbs += lun.carbs
                lunchFats += lun.fats
            });
    
            const dinnerData = await Dinner.findAll({
                where: {
                    created_at: { 
                      [Op.gt]: TODAY_START,
                      [Op.lt]: NOW
                    },
                },
                include: [
                    {
                        model: User,
                        where: {
                            id: req.session.userId
                        }
                    }
                ]
            })
            const dinner = dinnerData.map((din) => din.get({ plain: true }))
            dinner.forEach(din => {
                calorieGoal += din.calories
                dinnerCals += din.calories
                dinnerCarbs += din.carbs
                dinnerFats += din.fats
            });
    
            const snacksData = await Snacks.findAll({
                where: {
                    createdAt: { 
                      [Op.gt]: TODAY_START,
                      [Op.lt]: NOW
                    },
                },
                include: [
                    {
                        model: User,
                        where: {
                            id: req.session.userId
                        }
                    }
                ]
            })
            const snacks = snacksData.map((snack) => snack.get({ plain: true }))
            snacks.forEach(snack => {
                calorieGoal += snack.calories
                snacksCals += snack.calories
                snacksCarbs += snack.carbs
                snacksFats += snack.fats
            });
            res.render('tracker', {
                loggedIn: req.session.loggedIn,
                brkfstCals,
                brkfstCarbs,
                brkfstFats,
                lunchCals,
                lunchCarbs,
                lunchFats,
                dinnerCals,
                dinnerCarbs,
                dinnerFats,
                snacksCals,
                snacksCarbs,
                snacksFats,
                calGoal: req.session.calGoal,
                calorieGoal,
                percent: percentage(calorieGoal, req.session.calGoal)
            })
    
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    } else {
        res.redirect('/login')
    }
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/tracker');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/breakfast', (req, res) => {
    if (req.session.loggedIn) {
        res.render('brkfstFood');
        return;
    } else {
        res.redirect('/login')
    }
})

router.get('/dinner', (req, res) => {
    if (req.session.loggedIn) {
        res.render('dinnerFood');
        return;
    } else {
        res.redirect('/login')
    }
})

router.get('/snacks', (req, res) => {
    if (req.session.loggedIn) {
        res.render('snackFood');
        return;
    } else {
        res.redirect('/login')
    }
})

router.get('/lunch', (req, res) => {
    if (req.session.loggedIn) {
        res.render('lunchFood');
        return;
    } else {
        res.redirect('/login')
    }
})

module.exports = router