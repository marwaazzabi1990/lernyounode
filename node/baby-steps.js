var result = 0
var args = process.argv;

for (var i = 2; i < args.length; i++)
    result += Number(args[i])

console.log(result)