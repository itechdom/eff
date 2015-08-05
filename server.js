var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.json());

app.post('/',function(req,res) {

});
app.post('/code',function(req,res) {

});
var server = app.listen(4000,function(){
    console.log("app is listenting on port 4000");
});