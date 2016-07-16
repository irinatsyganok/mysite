
var http= require('http');
var fs = require('fs');


fs.readFile('../landing_page.html', function(err, html) {
	
	http.createServer(function(request, response) {
		response.writeHeader(200, {'Content-Type' : 'text/html'});
		response.write(html);
		response.end();
	}).listen(8081);
});



