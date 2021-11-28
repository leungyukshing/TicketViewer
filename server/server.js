var http = require("http")
var service = require('./handler')
var express = require('express');

const headers = {
    'Content-Type': 'text/plain',
    "Access-Control-Allow-Origin": "*"
}

var app = express();

app.get('/getTickets', function(request, response) {
    console.log(request.query.page)
    let requestUrl = "tickets.json?page=" + request.query.page + "&per_page=25"
    console.log(requestUrl)
    service.service({
        url: requestUrl,
        method: 'get'
    }).then(resp => {
        // console.log(resp)
        let respJson = JSON.stringify(resp)
        console.log(typeof(respJson))
        response.writeHead(200, headers)
        response.write(respJson)
        response.end()
        console.log("finish handle /getTickets")
    })
})

app.get('/getTicketsCount', function(request, response) {
    console.log(request)
    service.service({
        url: "tickets/count",
        method: 'get'
    }).then(resp => {
        //console.log(resp)
        let respJson = JSON.stringify(resp)
        console.log(typeof(respJson))
        response.writeHead(200, headers)
        response.write(respJson)
        response.end()
        console.log("finish handle /getTicketsCount")
    })
})

app.get('/', function(request, response) {
    console.log("hello")

    response.writeHead(200, headers);
    response.end("hello")
})

var server = app.listen(8080, function() {
    console.log("server running at http://127.0.0.1:8080");
})