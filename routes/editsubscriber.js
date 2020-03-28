var express = require('express');
var router = express.Router();
const Subscriber = require('../models/subscriber');



router.get('/:id', function(req, res) {
	Subscriber.findOne({ _id: req.params.id },function (err, result)  {
		
		if(err){
			res.status(404).send({msg: err});
		} else {
			res.render('editsubscriber', {
				id: result._id,
				email: result.email,
				firstName: result.firstName,
				lastName: result.lastName,
			})
		}
	});
});


router.put('/:id/Update', (req, res, next) => {
    
	let updatedSubscriber = req.body;

	 Subscriber.updateOne({ _id: req.params.id },{$set:updatedSubscriber},function (err, result)  {
		 if (err) {
			 res.json({ msg: 'Failed to update subscriber' });
		 }
		 else {
			 res.redirect('/');
		 }
	 });
 });



module.exports = router;
