// Importing  the library
const { convert } = require('html-to-text');
var fs = require('fs');

//Reading the content from the heml file and setting to the HtmlString
var content = fs.readFileSync('./mynewfile3.html', 'utf8');
var htmlString =  content;

//Removing the html tags from the htmlString.
var text = convert(htmlString, { wordwrap: 130 });

//Creating an server and setting the converted text to the response
var http = require('http'); http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});    
    response.end(text); }).listen(8081);
    
console.log('Server started in 8081... you can see the output by using  http://localhost:8081/ in the web browser after starting the server');


