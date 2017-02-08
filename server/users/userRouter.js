'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const userModel = require('./userEntity').userModel;

router.post('/add', function(req, res) {
    logger.debug("Received request" + JSON.stringify(req.body));
    if (req.body) {
        let user = new userModel(req.body);
        user.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({
                    message: 'User saved successfully'
                });
            }
        });
    }
})

router.delete('/delete/:id', function(req, res) {
    logger.debug("Received request" + JSON.stringify(req.body));
		if(req.params.id){
			let id = req.params.id;
			userModel.findByIdAndRemove(id, function(err) {
				if(err){res.send(err);}
				else{
					res.json({message: 'successfully deleted'});
				}
			});
		}
})

router.patch('/update/:id', function(req, res) {
    logger.debug("Received request" + JSON.stringify(req.body));
    if (req.params.id) {
        let id = req.params.id;
        userModel.findByIdAndUpdate(id,{$set:{userName:req.body.userName}},{new:true},function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({
                    message: 'User updated successfully'
                });
            }
        });
    }
})

// Get details of all users in the system
router.get('/', function(req, res) {
			userModel.find({},function(all , err) {
					if (err) {
							res.send(err);
					} else {
							res.json({all});
					}
			});
});

module.exports = router;
