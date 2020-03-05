const express = require('express');
const chirpsRouter = require('./chirps.js');
const usersRouter = require('./users');

const router = express.Router();

router.use('/chirps', chirpsRouter);
router.use('/users', usersRouter);

module.exports = router;