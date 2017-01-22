var http = require('http')

var port = process.env.PORT || 8888


function start(){
	var http = require("http")

	function onRequest(request, response){
		console.log("Request Received");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(port)
	console.log("Server has Started.");
	
}

exports.start = start;