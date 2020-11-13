var fortune = require('./lib/fortune.js');
var express = require('express');
const { rsort } = require('semver');
var app = express();

var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
    // res.type('text/plain');
    // res.send('Medowlark Travel');
    res.render('home');
});

app.get('/about', function(req, res){
    // res.type('text/plain');
    // res.send('About Meadow Lark Travel');
    // var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', {fortune: fortune.getFortune()});
});


app.use(function(req, res, next){
    // res.type('text/plain');
    res.status(404);
    // res.send('404 - Not Found');
    res.render('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    // res.type('text/plain');
    res.status(500);
    // res.send('500 - Server Error');
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C t terminate.');
});



