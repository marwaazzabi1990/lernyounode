var sheminaexporter = require('./mymodule.js');
var  fileafiltrer= process.argv[2];
var extensionString= process.argv[3];
 
sheminaexporter(fileafiltrer, extensionString, function (err, list) {
    if (err) {
        return console.log('There was an error:', err);
    }
 
    list.map(function (file) {
        console.log(file)
    });
});