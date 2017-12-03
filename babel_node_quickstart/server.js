/**
 * Small but working NodeJS server.
 * Running with Babel and ECMAScript 6.
 *
 * @author Nicolas GIGOU
 */

// Dependencies
const http = require('http');

// Server settings
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

// Notification to the user
console.log('Server running at http://127.0.0.1:1337/');