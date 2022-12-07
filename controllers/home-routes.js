const router = require('express').Router()
const User = require('../models/User')
const Breakfast = require('../models/Breakfast')
const Lunch = require('../models/Lunch')
const Snacks = require('../models/Snacks')
const Dinner = require('../models/Dinner')

router.get('/', async (req, res) => {
    // try {
    //     if(req.session.loggedIn) {
    //         res.redirect('/tracker')
    //     } else {
    //         res.render('homepage')
    //     }
    // } catch (err) {
    //     console.log(err)
    //     res.status(500).json(err)
    // }
})

router.get('/tracker', async (req, res) => {
    console.log(req.session.userId)
    try {
        const brkfstData = await Breakfast.findAll({
            // include: [
            //     {
            //         model: User,
            //         where: {
            //             id: req.session.userId
            //         }
            //     }
            // ]
        })
        const brkfst = brkfstData.map((brk) => brk.get({ plain: true }))
        const lunchData = await Lunch.findAll()
        const lunch = lunchData.map((lun) => lun.get({ plain: true }))
        const dinnerData = await Dinner.findAll()
        const dinner = dinnerData.map((din) => din.get({ plain: true }))
        const snacksData = await Snacks.findAll()
        const snacks = snacksData.map((snack) => snack.get({ plain: true }))

        res.render('homepage', {
            brkfst,
            lunch,
            dinner,
            snacks,
        })

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
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

module.exports = router