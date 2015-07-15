var fs = require('fs');

var contents = fs.readFileSync('package.json').toString();
console.log(contents);
