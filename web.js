var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var file_buffer = fs.readFileSync('index.html');
var buffer = new Buffer(file_buffer);
file_content = buffer.toString(buffer);

app.get('/', function(request, response) {
  response.send(file_content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
