const mongoose = require('mongoose');

const SubscriberSchema = mongoose.Schema({
    firstName:{
        type:String,
        required :true
    },
    lastName:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required :true
    }
});

const subscriber = mongoose.model('subscribers',SubscriberSchema);
module.exports = subscriber;