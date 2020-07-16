const fs = require('fs')
const buffer = fs.readFileSync(process.argv[2])
const str = buffer.toString()

var tab = str.split('\n')
console.log(tab.length - 1)