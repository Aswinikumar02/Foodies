'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
//const userCtrl = require('./userController');

router.post('/add', function(req, res) {
    logger.debug("Inside user post");
    let user = req.body.name;
    if (typeof user !== 'number')
        res.send('Hello ' + user);
    }
);

router.delete('/delete', function(req, res) {
    logger.debug("Inside user delete post");
    let user = req.body.id;
    if (typeof user === 'number')
        res.send('delete ' + user);
    }
);

router.patch('/update', function(req, res) {
    logger.debug("Inside user update post");
    let user = req.body.id;
    res.send('updated ' + user);
});

// Get details of all user in the system
router.get('/', function(req, res) {
    console.log('Inside get');
    res.send('response from user GET route check');
});

module.exports = router;
