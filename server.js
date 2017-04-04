var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    userController = require('./api/controllers/user_controller');

app.use(bodyParser());

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.use('/app',
        express.static(__dirname + '/app'));
app.use('/bower_components',
        express.static(__dirname + '/bower_components'));

// REST APIs
app.post('/api/user', userController.create);
app.get('/api/user', userController.list);


app.listen(8888, function () {
    console.log("Server started");
});
