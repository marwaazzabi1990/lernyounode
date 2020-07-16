var fs = require('fs');
var path = require('path');
 
module.exports = function (fileafiltrer, extensionString, callback) {
 
    fs.readdir(fileafiltrer, function (err, list) {
        if (err) {
            return callback(err);
        }
 
        list = list.filter(function (file) {
            return path.extname(file) === '.' + extensionString
        });
 
        callback(null, list)
    })
}