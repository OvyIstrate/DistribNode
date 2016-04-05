var express = require('express');

var app = express();

var port = process.env.PORT;

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index.ejs');
})
app.listen(port, function(err){
  console.log('running server on port ' + port);
})
//this is a comment to test the serve
