var express = require('express');
var router = express.Router();
const Subscriber = require('../models/subscriber');



router.get('/', function(req, res) {
	res.render('addsubscriber');
});


router.post('/', (req, res, next) => {
    let newSubscriber = new Subscriber({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });
    
    newSubscriber.save((err, subscriber) => {
        if (err) {
            res.json({ msg: 'Failed to add subscriber' });
        }
        else {
            res.redirect("/");
        }
    });
});

module.exports = router;
