var express = require('express');
var router = express.Router();

/* GET contacts */
router.get('/', function (req, res) {
    var contacts = [{ "name": "Jane Doe", "phone": "888-555-1212" }, { "name": "Justin Doe", "phone": "877-123-1212" }];
    res.json(contacts);
});

module.exports = router;
