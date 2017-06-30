var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.sendfile('index.html')
});

app.listen(3000,function(){
  console.log('Server has started.....');
});
