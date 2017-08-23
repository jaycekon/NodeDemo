var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get("/", function (req, rep) {
    superagent.get('https://cnodejs.org/').end(function (err,sres){
        if(err){
            return next(err);
        }

        console.log(sres.text);

        var $ = cheerio.load(sres.text);
        var items = [];

        $('#topic_list .topic_title').each(function (idx, element) {
            var $element = $(element);
            items.push({
                title: $element.attr('title'),
                href: $element.attr('href')
            });
        });

        rep.send(items);

    })
});

app.listen(3000, function () {
    console.log('node listening 3000 port!')
});