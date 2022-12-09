const router = require('express').Router()
const User = require('../../models/User');
const Breakfast = require('../../models/Breakfast');
const Lunch = require('../../models/Lunch');
const Snacks = require('../../models/Snacks');
const Dinner = require('../../models/Dinner');

router.post('/breakfast', async (req, res) => {
    try {
        const breakfastData = await Breakfast.create({
            ...req.body,
            user_id: req.session.userId
        });

            res.status(200).json(breakfastData);
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/dinner', async (req, res) => {
    try {
        const dinnerData = await Dinner.create({
            ...req.body,
            user_id: req.session.userId
        });

            res.status(200).json(dinnerData);
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/lunch', async (req, res) => {
    try {
        const lunchData = await Lunch.create({
            ...req.body,
            user_id: req.session.userId
        });

            res.status(200).json(lunchData);
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/snacks', async (req, res) => {
    try {
        const snacksData = await Snacks.create({
            ...req.body,
            user_id: req.session.userId
        });

            res.status(200).json(snacksData);
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;