var express =require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var routes = require('./routes/index');
var subscriber = require('./routes/subscriber');
var addsubscriber = require('./routes/addsubscriber');
var editsubscriber = require('./routes/editsubscriber');
var methodOverride = require("method-override");

var app = express();
mongoose.connect('mongodb://localhost:27017/SubscribersDB', 
{ useNewUrlParser: true ,
useUnifiedTopology: true });
mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongoDB')
});
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('Error Connecting to database mongoDB')
    }
    
});
const port = 3000;

/*app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });
*/
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/subscriber', subscriber);
app.use('/addsubscriber', addsubscriber);
app.use('/editsubscriber', editsubscriber);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(port,()=>{
    console.log("Server started at port:"+port);
});