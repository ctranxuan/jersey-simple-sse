var http = require("http");
var fs = require("fs");


var host = "127.0.0.1";
var port = 8989;
var path = "/app/stocks/prices";

http.createServer(function (req, res) {
  var interval;
  var fileName = "." + req.url;

  if (fileName === "." + path) {
    var origin = (req.headers.origin || "*");
    var i = 0;
    var price = Math.floor(Math.random() * (100 - 1) + 1);
    res.writeHead(200, {"Content-Type":"text/event-stream", "Cache-Control":"no-cache", "Connection":"keep-alive", "access-control-allow-origin": "*"});
    
    res.write("event: snapshot\n");
    res.write("id: c9db1c53-bcb4-4b0b-ae30-ac91254ae44" + i + "\n");
    res.write("data: [{\"title\":\"Value 1\",\"price\":" + price + ",\"param1\":\"value1\",\"param2\":\"value2\",\"param3\":\"value3\",\"param4\":\"value4\",\"param5\":\"value5\",\"param6\":\"value6\",\"param7\":\"value7\",\"param8\":\"value8\"},{\"title\":\"Value 2\",\"price\":89,\"param1\":\"value1\",\"param2\":\"value2\",\"param3\":\"value3\",\"param4\":\"value4\",\"param5\":\"value5\",\"param6\":\"value6\",\"param7\":\"value7\",\"param8\":\"value8\"},{\"title\":\"Value 3\",\"price\":63,\"param1\":\"value1\",\"param2\":\"value2\",\"param3\":\"value3\",\"param4\":\"value4\",\"param5\":\"value5\",\"param6\":\"value6\",\"param7\":\"value7\",\"param8\":\"value8\"},{\"title\":\"Value 4\",\"price\":11,\"param1\":\"value1\",\"param2\":\"value2\",\"param3\":\"value3\",\"param4\":\"value4\",\"param5\":\"value5\",\"param6\":\"value6\",\"param7\":\"value7\",\"param8\":\"value8\"},{\"title\":\"Value 5\",\"price\":30,\"param1\":\"value1\",\"param2\":\"value2\",\"param3\":\"value3\",\"param4\":\"value4\",\"param5\":\"value5\",\"param6\":\"value6\",\"param7\":\"value7\",\"param8\":\"value8\"},{\"title\":\"Value 6\",\"price\":20,\"param1\":\"value1\",\"param2\":\"value2\",\"param3\":\"value3\",\"param4\":\"value4\",\"param5\":\"value5\",\"param6\":\"value6\",\"param7\":\"value7\",\"param8\":\"value8\"},{\"title\":\"Value 7\",\"price\":65,\"param1\":\"value1\",\"param2\":\"value2\",\"param3\":\"value3\",\"param4\":\"value4\",\"param5\":\"value5\",\"param6\":\"value6\",\"param7\":\"value7\",\"param8\":\"value8\"},{\"title\":\"Value 8\",\"price\":97,\"param1\":\"value1\",\"param2\":\"value2\",\"param3\":\"value3\",\"param4\":\"value4\",\"param5\":\"value5\",\"param6\":\"value6\",\"param7\":\"value7\",\"param8\":\"value8\"},{\"title\":\"Value 9\",\"price\":4,\"param1\":\"value1\",\"param2\":\"value2\",\"param3\":\"value3\",\"param4\":\"value4\",\"param5\":\"value5\",\"param6\":\"value6\",\"param7\":\"value7\",\"param8\":\"value8\"},{\"title\":\"Value 10\",\"price\":43,\"param1\":\"value1\",\"param2\":\"value2\",\"param3\":\"value3\",\"param4\":\"value4\",\"param5\":\"value5\",\"param6\":\"value6\",\"param7\":\"value7\",\"param8\":\"value8\"},{\"title\":\"Value 11\",\"price\":7,\"param1\":\"value1\",\"param2\":\"value2\",\"param3\":\"value3\",\"param4\":\"value4\",\"param5\":\"value5\",\"param6\":\"value6\",\"param7\":\"value7\",\"param8\":\"value8\"},{\"title\":\"Value 12\",\"price\":27,\"param1\":\"value1\",\"param2\":\"value2\",\"param3\":\"value3\",\"param4\":\"value4\",\"param5\":\"value5\",\"param6\":\"value6\",\"param7\":\"value7\",\"param8\":\"value8\"},{\"title\":\"Value 13\",\"price\":51,\"param1\":\"value1\",\"param2\":\"value2\",\"param3\":\"value3\",\"param4\":\"value4\",\"param5\":\"value5\",\"param6\":\"value6\",\"param7\":\"value7\",\"param8\":\"value8\"},{\"title\":\"Value 14\",\"price\":38,\"param1\":\"value1\",\"param2\":\"value2\",\"param3\":\"value3\",\"param4\":\"value4\",\"param5\":\"value5\",\"param6\":\"value6\",\"param7\":\"value7\",\"param8\":\"value8\"},{\"title\":\"Value 15\",\"price\":16,\"param1\":\"value1\",\"param2\":\"value2\",\"param3\":\"value3\",\"param4\":\"value4\",\"param5\":\"value5\",\"param6\":\"value6\",\"param7\":\"value7\",\"param8\":\"value8\"}]\n\n");
    res.write("retry: 10000\n");

    interval = setInterval(function() {
      i = i + 1;
      price = Math.floor(Math.random() * (100 - 1) + 1);
      res.write("event: snapshot\n");
      res.write("id: c9db1c53-bcb4-4b0b-ae30-ac91254ae44" + i + "\n");
      res.write("data: [{\"title\":\"Value 1\",\"price\":" + price + ",\"param1\":\"value1\",\"param2\":\"value2\",\"param3\":\"value3\",\"param4\":\"value4\",\"param5\":\"value5\",\"param6\":\"value6\",\"param7\":\"value7\",\"param8\":\"value8\"}]\n\n");

      console.log('sent!');	
    }, 1000);
    req.connection.addListener("close", function () {
      clearInterval(interval);
      console.log('closed!');
    }, false);
  } else {
    res.writeHead(404);
    res.end();
  }

}).listen(port, host);
console.log("Server running at http://%s:%d%s", host, port, path);
