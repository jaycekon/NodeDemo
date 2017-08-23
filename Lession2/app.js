var express = require('express');

var utility = require('utility');


var app = express();

app.get("/", function (req, rep) {
    var q = req.query.q;

    var md5 = '';
    if (q !== undefined) {
        md5 = utility.md5(q);
    }

    rep.send(md5)
});

app.listen(3000, function () {
    console.log('node listening 3000 port!')
});