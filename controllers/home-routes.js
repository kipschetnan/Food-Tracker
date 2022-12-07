const router = require('express').Router()
const User = require('../models/User')
const Breakfast = require('../models/Breakfast')
const Lunch = require('../models/Lunch')

router.get('/', async (req, res) => {
    try {
        if(req.session.loggedIn) {
            res.redirect('/tracker')
        } else {
            res.render('homepage')
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/tracker', async (req, res) => {
    try {
        const brkfstData = await Breakfast.findAll({
            include: [
                {
                    model: User,
                    where: {
                        id: req.session.userId
                    }
                }
            ]
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