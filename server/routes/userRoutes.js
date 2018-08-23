const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

router.get('/', (req, res) => {
    User.find()
        .then(data => res.json(data))
        .catch(err => console.log(err));
})

router.get('/currentUser', (req, res) => {
    if(req.user){
        res.json({
            exists: true,
            user: req.user
        });
    } else{
        res.json({
            exists: false,
            user: null
        });
    }
})


router.post('/signup', (req, res) => {
    const newUser = new User({
        userNumber: req.body.userNumber,
        password: req.body.password
    })
    newUser.save()
        .then(data => res.json(data))
        .catch(err => console.log(err));

})

router.post('/login', function(req, res, next){
    // console.log("It worked");
    // res.send("Hi");
    passport.authenticate('local', function(err, user, info){

        if (err) { return next(err); }
        if (!user) { return res.json({success:false}); }
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          return res.json({
            success:true,
            user: req.user
          });
        });
    })(req, res, next)
    // console.log(req.user)
})

router.get('/logout', (req, res) => {
    req.logout();
    res.json({success:true});
})

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'userNumber',
    passwordField: 'password'
},
    function (username, password, done) {
        User.findOne({ userNumber: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password != password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

module.exports = router;