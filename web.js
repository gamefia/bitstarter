var express = require('express');

var app = express.createServer(express.logger());

var file_content = file.readFileSync('index.html');
file_content = buf.write(file_content);

app.get('/', function(request, response) {
  response.send(file_content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
