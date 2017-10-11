var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/scrape', function(req, res){


	var url = {
		// Battle Manual
		url: 'http://www.ragi.al/item/iRO-Odin/ZDI/',
		headers: {
		    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:55.0) Gecko/20100101 Firefox/55.0'
		}
	}

	request(url, function(error, response, html){
	    if(!error){
	        var $ = cheerio.load(html);

	    var item, quantity, price;
	    var json = { vending : "", item : "", quantity : "", price : ""};

	    $('.mkt_left').filter(function(){
	        var data = $('.mkt_left h1 a');
	        item = data.text();         
	        json.item = item;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(1)');
	        vending = data.text();
	        json.vending = vending;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(2)');
	        quantity = parseFloat(data.text());
	        json.quantity = quantity;
	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(3) > a:nth-child(1)');
	        price = parseFloat(data.text().replace(',','').replace(',','').replace(',','').replace(',',''));
	        json.price = price;
	
	        
	    })
	}
	res.send(json)
	});

})


app.get('/scrape2', function(req, res){


	var url = {
		// Battle Manual
		url: 'http://www.ragi.al/item/iRO-Odin/WwI/',
		headers: {
		    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:55.0) Gecko/20100101 Firefox/55.0'
		}
	}

	request(url, function(error, response, html){
	    if(!error){
	        var $ = cheerio.load(html);

	    var item, quantity, price;
	    var json = { vending : "", item : "", quantity : "", price : ""};

	    $('.mkt_left').filter(function(){
	        var data = $('.mkt_left h1 a');
	        item = data.text();         
	        json.item = item;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(1)');
	        vending = data.text();
	        json.vending = vending;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(2)');
	        quantity = parseFloat(data.text());
	        json.quantity = quantity;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(3) > a:nth-child(1)');
	        price = parseFloat(data.text().replace(',','').replace(',','').replace(',','').replace(',',''));
	        json.price = price;
	
	        
	    })
	}
	res.send(json)
	});

})

app.get('/scrape3', function(req, res){


	var url = {
		// Old Blue Box
		url: 'http://www.ragi.al/item/iRO-Odin/r0U/',
		headers: {
		    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:55.0) Gecko/20100101 Firefox/55.0'
		}
	}

	request(url, function(error, response, html){
	    if(!error){
	        var $ = cheerio.load(html);

	    var item, quantity, price;
	    var json = { vending : "", item : "", quantity : "", price : ""};

	    $('.mkt_left').filter(function(){
	        var data = $('.mkt_left h1 a');
	        item = data.text();         
	        json.item = item;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(1)');
	        vending = data.text();
	        json.vending = vending;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(2)');
	        quantity = parseFloat(data.text());
	        json.quantity = quantity;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(3) > a:nth-child(1)');
	        price = parseFloat(data.text().replace(',','').replace(',','').replace(',','').replace(',',''));
	        json.price = price;
	
	        
	    })
	}
	res.send(json)
	});

})

app.get('/scrape4', function(req, res){


	var url = {
		// Biotite
		url: 'http://www.ragi.al/item/iRO-Odin/gRw/',
		headers: {
		    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:55.0) Gecko/20100101 Firefox/55.0'
		}
	}

	request(url, function(error, response, html){
	    if(!error){
	        var $ = cheerio.load(html);

	    var item, quantity, price;
	    var json = { vending : "", item : "", quantity : "", price : ""};

	    $('.mkt_left').filter(function(){
	        var data = $('.mkt_left h1 a');
	        item = data.text();         
	        json.item = item;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(1)');
	        vending = data.text();
	        json.vending = vending;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(2)');
	        quantity = parseFloat(data.text());
	        json.quantity = quantity;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(3) > a:nth-child(1)');
	        price = parseFloat(data.text().replace(',','').replace(',','').replace(',','').replace(',',''));
	        json.price = price;
	
	        
	    })
	}
	res.send(json)
	});

})


app.get('/scrape5', function(req, res){


	var url = {
		// Biotite
		url: 'http://www.ragi.al/item/iRO-Odin/jRs/',
		headers: {
		    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:55.0) Gecko/20100101 Firefox/55.0'
		}
	}

	request(url, function(error, response, html){
	    if(!error){
	        var $ = cheerio.load(html);

	    var item, quantity, price;
	    var json = { vending : "", item : "", quantity : "", price : ""};

	    $('.mkt_left').filter(function(){
	        var data = $('.mkt_left h1 a');
	        item = data.text();         
	        json.item = item;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(1)');
	        vending = data.text();
	        json.vending = vending;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(2)');
	        quantity = parseFloat(data.text());
	        json.quantity = quantity;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(3) > a:nth-child(1)');
	        price = parseFloat(data.text().replace(',','').replace(',','').replace(',','').replace(',',''));
	        json.price = price;
	
	        
	    })
	}
	res.send(json)
	});

})


app.get('/scrape6', function(req, res){
	var url = {
		// Well-Dried Bone
		url: 'http://www.ragi.al/item/iRO-Odin/dAI/',
		headers: {
		    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:55.0) Gecko/20100101 Firefox/55.0'
		}
	}

	request(url, function(error, response, html){
	    if(!error){
	        var $ = cheerio.load(html);

	    var item, quantity, price;
	    var json = { vending : "", item : "", quantity : "", price : ""};

	    $('.mkt_left').filter(function(){
	        var data = $('.mkt_left h1 a');
	        item = data.text();         
	        json.item = item;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(1)');
	        vending = data.text();
	        json.vending = vending;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(2)');
	        quantity = parseFloat(data.text());
	        json.quantity = quantity;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(3) > a:nth-child(1)');
	        price = parseFloat(data.text().replace(',','').replace(',','').replace(',','').replace(',',''));
	        json.price = price;	        
	    })
	}
	res.send(json)
	});


	app.get('/scrape7', function(req, res){
	var url = {
		// Well-Dried Bone
		url: 'http://www.ragi.al/item/iRO-Odin/ygI/',
		headers: {
		    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:55.0) Gecko/20100101 Firefox/55.0'
		}
	}

	request(url, function(error, response, html){
	    if(!error){
	        var $ = cheerio.load(html);

	    var item, quantity, price;
	    var json = { vending : "", item : "", quantity : "", price : ""};

	    $('.mkt_left').filter(function(){
	        var data = $('.mkt_left h1 a');
	        item = data.text();         
	        json.item = item;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(1)');
	        vending = data.text();
	        json.vending = vending;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(2)');
	        quantity = parseFloat(data.text());
	        json.quantity = quantity;

	        var data = $('#selltable tr.odd:nth-child(1) > td:nth-child(3) > a:nth-child(1)');
	        price = parseFloat(data.text().replace(',','').replace(',','').replace(',','').replace(',',''));
	        json.price = price;	        
	    })
	}
	res.send(json)
	});
})
})














app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;

