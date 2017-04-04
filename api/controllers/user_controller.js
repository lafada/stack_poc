var jsonfile = require('jsonfile');
var path = require('path');

var user_json = path.dirname(__dirname) + '/data/user.json';

module.exports.create = function (req, res) {
    jsonfile.readFile(user_json, function(err, obj) {
        var user_data = obj || [];
        user_data.push(req.body);
        jsonfile.writeFile(user_json, user_data, {spaces: 2}, function(err) {
            if (err) {
              console.error(err);
            }
        })
    });
    res.json(req.body);
};

module.exports.list = function (req, res) {
    jsonfile.readFile(user_json, function(err, obj) {
        res.json(obj || []);
    });
};
