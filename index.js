var express = require('express');
var http = require('http');
var dotenvConfig = require('dotenv');
var path = require('path');
var serveStatic = require('serve-static');



var app = express();
var router = express.Router();

var cors = require('cors');
app.use(cors()) ;



var PORT = process.env.PORT || 3000;

//app.use('/', express.static('app/public'), serveStatic('app/public', {'icons': true}))
app.use(express.static(path.join(__dirname, '/public')));


router.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});


/* router.get('/home', function(req, res){
    res.sendFile(__dirname + '/app/public/opaloapp.html');
}); */


app.use('/', router);

app.listen(PORT, function(){ console.log(`Listening at port ${PORT} `)});