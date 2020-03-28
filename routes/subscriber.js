var express = require('express');
var router = express.Router();
const Subscriber = require('../models/subscriber');


router.get('/:id', function(req, res) {
	Subscriber.findOne({ _id: req.params.id },function (err, result)  {
		if(err){
			res.status(404).send({msg: err});
		} else {
			res.render('subscriber', {
				_id: result._id,
				email: result.email,
				firstName: result.firstName,
				lastName: result.lastName,
			})
		}
	});
});




router.delete('/:id', (req, res, next) => {
    Subscriber.findOneAndDelete({ _id: req.params.id }, (err, result) => {
		if(err){
			res.status(404).send({msg: err});
		} else {
			res.json(result);
		}
    });
});

module.exports = router;
