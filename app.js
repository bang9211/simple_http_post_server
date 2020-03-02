var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json({ strict: false }));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));
var xmlParser = bodyParser.text({ limit: '1mb', type: '*/*' });
app.use(xmlParser);

app.post('/', function(req, res) {
    console.log('=======================================================================');
    console.log('HEADERS----------------------------------------------------------------');
    console.log(req.headers);
    console.log('BODY-------------------------------------------------------------------');
    console.log(req.body);
    res.writeHead(200, { 'Content-Type': 'application/xml' });
    res.end('<test>test</test>');
});

app.get('/', function(req, res) {
    console.log('=======================================================================');
    console.log('HEADERS----------------------------------------------------------------');
    console.log(req.headers);
    console.log('BODY-------------------------------------------------------------------');
    console.log(req.body);
    res.writeHead(200, { 'Content-Type': 'application/xml' });
    res.end('<test>test</test>');
});

//port = 4000;
port = 9060;
app.listen(port);
console.log('Listening at http://localhost:' + port);
