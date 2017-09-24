var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){

	var url = {
		url: 'http://www.ragi.al/item/iRO-Odin/ZDI/',
		headers: {
		    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:55.0) Gecko/20100101 Firefox/55.0'
		}
	}

	request(url, function(error, response, html){
	    if(!error){
	        var $ = cheerio.load(html);

	    var item, quantity, price;
	    var json = { item : "", quantity : "", price : ""};

	    $('.mkt_left').filter(function(){
	        var data = $(this);
	        item = data.text();         

	        json.item = item;
	    })
	}

	// Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
	res.send(json)

	}) ;
})



app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;

