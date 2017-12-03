/**
 * server.js
 *
 * @description Application to test an OCR tutorial about "How to make fast NodeJs application"
 * @author Nicolas GIGOU
 * @Source https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/socket-io-passez-au-temps-reel
 */


/**
 * ----------------------------------------------------------------------------------
 * NodeJs modules
 * ----------------------------------------------------------------------------------
 */
// Mandatory for the first part
var fs = require('fs');

// Addition due to the second part
var app = require('express')();
var server = require('http').createServer(app);
var ent = require('ent'); // To block the special characters (equivalent of htmlentities)


/**
 * ----------------------------------------------------------------------------------
 * Server settings
 * ----------------------------------------------------------------------------------
 */
// Loading of the index.html file displayed to the client
// Using the http module (first part, w/o Express)
// var server = http.createServer(function(req, res) {
//     fs.readFile('./index.html', 'utf-8', function(error, content) {
//         res.writeHead(200, {"Content-Type": "text/html"});
//         res.end(content);
//     });
// });

// Loading the index page using Express (second part)
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


/**
 * ----------------------------------------------------------------------------------
 * Server notifications
 * ----------------------------------------------------------------------------------
 */
// Loading of socket.io
var io = require('socket.io').listen(server);

// When a client comes to be connected, you notify it in the console
io.sockets.on('connection', function (socket) {

    // Log a new message when there is a new connection
    var clientIp = socket.request.connection.remoteAddress;
    console.log('New connection from ' + clientIp);

    // Notify the user by sending a message
    // socket.emit('message', { 'content': "You're logged in! Good boy!", 'importance': 1});
    // socket.broadcast.emit('message', { 'content': "another client is connected", 'importance': 1});

    // When a new client try to connect
    // We add his/her username in the socket object
    // (Not a good practise, just to try)
    socket.on('new_client', function(pseudo) {
        pseudo = ent.encode(pseudo);
        socket.pseudo = pseudo;
        socket.broadcast.emit('new_client', pseudo);
    });

    // When receiving a "message" request from the client
    socket.on('message', function (message) {
        message = ent.encode(message);
        socket.broadcast.emit('message', {pseudo: 'You', message: message});
    });

    // When receiving a "push_spam_button" request from the client
    socket.on('push_spam_button', function (message) {
        message = ent.encode(message);
        console.log("New message from the client : '" + message + "'");
    });
});


/**
 * ----------------------------------------------------------------------------------
 * Server settings
 * ----------------------------------------------------------------------------------
 */
server.listen(8080, function()
{
	var host = 'localhost';
	var port = server.address().port;

	console.log("         _______      ");
	console.log("       _/       \\_      ");
	console.log("      / |       | \\      ");
	console.log("     /  |__   __|  \\      ");
	console.log("    |__/((o| |o))\\__|      ");
	console.log("    |      | |      |      ");
	console.log("    |\\     |_|     /|      ");
	console.log("    | \\           / |      ");
	console.log("     \\| /  ___  \\ |/      ");
	console.log("      \\ | / _ \\ | /      ");
	console.log("       \\_________/      ");
	console.log("        _|_____|_      ");
	console.log("   ____|_________|____   ");
	console.log("  /                   \\   ");

  	console.log('Your awesome app is running at http://%s:%s', host, port);
});