'use strict';
// const logger = require('./../../applogger');
const router = require('express').Router();
const mongoose = require('mongoose');
const Restaurant = require('./restaurantEntity');
const userCtrl = require('./restaurantController');

router.post('/add', userCtrl.post);
router.get('/view', userCtrl.Get);
router.delete('/delete/:id', userCtrl.delete);
router.patch('/update/:id', userCtrl.patch);

module.exports = router;
