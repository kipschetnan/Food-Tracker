const router = require('express').Router();
const { User } = require('../../models');

//create new user
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
            calorie_goal: req.body.calGoal,
        });
        req.session.calGoal = dbUserData.calorie_goal
        req.session.username = dbUserData.username

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    console.log('in login api')

    try {
        const dbUserData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });
        console.log('user data:' + dbUserData)

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        const passwd = await dbUserData.password

        validPassword = passwd == req.body.password
        req.session.username = dbUserData.username
        req.session.userId = dbUserData.id
        req.session.calGoal = dbUserData.calorie_goal

        console.log(dbUserData.id)
        console.log("Password from body is:", req.body.password)
        console.log("Valid password = ", validPassword)

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;

            res
                .status(200)
                .json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
