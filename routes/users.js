var express = require('express');
var router = express.Router();


const bcrypt = require('bcryptjs');

const user = require('../models/User.model');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', (req, res, next) => {
  res.render('login.hbs')
})

router.get('/signup', (req, res, next) => {
  res.render('signup.hbs')
})

module.exports = router;
