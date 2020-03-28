var express = require('express');
var router = express.Router();
const Subscriber = require('../models/subscriber');

router.get('/', (req, res, next) => {
    Subscriber.find(function (err, subscribers) {
        if(err){
        res.status(404).send({msg: err});
    } else {
        res.render('index', {subscribers})
    }
    })
     
});

module.exports = router;
