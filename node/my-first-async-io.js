const fs = require('fs')
var path = process.argv[2]
fs.readFile(path, function (err, str) {

 const buffer=str


    var tab = buffer.toString().split('\n')
    console.log(tab.length - 1)
})
