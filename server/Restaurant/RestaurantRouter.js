'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const mongoose = require( 'mongoose' );
const RestaurantModel = require('./restaurantEntity').RestaurantModel;
//onst userCtrl = require('./restaurantController');

router.post('/add', function(req, res){
    // logger.debug("Received request"+JSON.stringify(req.body));
 if(req.body)
 {
   let Restaurant = new RestaurantModel(req.body);
   Restaurant.save(function(err){
   if(err){
     res.send(err);
   }
   else{
      res.json({message:'Restaurant saved successfully'});
   }
   });
 }
})

router.get('/', function(req, res) {
    RestaurantModel.find({}, function(all, err) {
        if (err) {
            res.send(err);
        } else {
            res.json({all});
        }
    });
});



// router.delete('/delete', function(req, res){
//     // var nuser = new User(req.body);
//     var res_id = req.body._id;

//     if(isNaN(res_id) || res_id == "")
//     {
//         res.send("enter valid ID")
//     }
//     else{

//         Restaurant.findById(req.body._id, function (err, restaurants) {
//         if (err) {
//             return console.error(err);
//         } else {
//             //remove it from Mongo
//             restaurants.remove(function (err, restaurants) {
//                 if (err) {
//                     return console.error(err);
//                 } else {
//                     res.send("Deleted Successfully");
//        }
//    })
//         }
//     })

//     }
//  });
// router.put('/update/:id', function(req,res){

//    Restaurant.findById(req.params.id, function(err, restaurants) {
//    if (err){
//      throw console.err(err);
//    }
//    restaurants.comments = req.body.comments;
//    restaurants.save(function(err) {
//    if (err) {
//        throw console.err(err);
//    } else
//    {
//        res.send('User successfully updated!');
//    }
//  });
// });
// })
module.exports = router;
