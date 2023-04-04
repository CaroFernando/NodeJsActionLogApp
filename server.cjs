var express = require('express');
var app = express();
app.use(express.json());

const fs = require('fs');

app.get('/', function (req, res) {
    app.use(express.static('public'));
    res.sendFile(__dirname + '/public/index.html');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

app.post('/LogAction', function (req, res) {
    console.log(req.body);
    
    var clientip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var clientbrowser = req.headers['user-agent'];
    var clientaction = req.body.action;
    var clientdata = req.body.message;
    var date = new Date();
    var formated_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + date.toLocaleTimeString();
    
    var log_json = {
        "ip": clientip,
        "browser": clientbrowser,
        "date": formated_date, 
        "action": clientaction,
        "data": clientdata
    }

    var log = fs.createWriteStream('action_log.txt', {flags: 'a'});
    log.write(JSON.stringify(log_json) + '\n');
    res.send('OK');
})

app.post('/LogError', function (req, res) {
    console.log(req.body);
    
    var clientip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var clientbrowser = req.headers['user-agent'];
    var clientaction = req.body.action;
    var clientdata = req.body.message;
    var date = new Date();
    var formated_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + date.toLocaleTimeString();
    
    var log_json = {
        "ip": clientip,
        "browser": clientbrowser,
        "date": formated_date,
        "action": clientaction,
        "data": clientdata
    }

    var log = fs.createWriteStream('error_log.txt', {flags: 'a'});
    log.write(JSON.stringify(log_json) + '\n');
    res.send('OK');


})