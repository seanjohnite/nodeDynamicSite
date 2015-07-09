// Problem: We need a simple way to look at a user's 
// badge count and JavaScript points from a web browser.

// Solution: Use Node.js to perform the profile lookups and serve our templates via HTTP

var router = require('./router');

// 1. Create a webserver
var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);


  //response.end('Hello World\n');

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
