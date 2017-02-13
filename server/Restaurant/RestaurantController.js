const Restaurant = require('./restaurantEntity');

let Restaurantcntrl = {
    Get: function(req, res) {
        Restaurant.find({}, function(err, todos) {
            if (err) {
                res.json({status: false, error: 'Something went wrong'});
                return;
            }
            res.json({status: true, restaurant: todos});
        });
    },

    post: function(req, res) {
        var restaurant = new Restaurant(req.body);
        restaurant.save(function(err, todo) {
            if (err) {
                res.json({status: false, error: 'Something went wrong'});
                return;
            }
            res.json({status: true, message: 'Restaurant Saved!!'});
        });
    },

    delete: function(req, res) {
        let id = req.params.id;
        Restaurant.findByIdAndRemove(id).then((doc) => {
            res.send(doc);
        }, (err) => {
            res.send(err);
        });
    },
    patch: function(req, res) {
        let id = req.params.id;
        Restaurant.findByIdAndUpdate(id, {
            $set: {
                comments: req.body.comments
            }
        }, {new: true}).then((doc) => {
            res.send(doc);
        }, (err) => {
            res.send(err);
        });
    }
};

module.exports = Restaurantcntrl;
