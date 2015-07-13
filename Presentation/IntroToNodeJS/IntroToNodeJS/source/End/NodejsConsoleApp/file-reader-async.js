var fs = require('fs');

fs.readFile('package.json', function (err, buf) {
    console.log(buf.toString());
});