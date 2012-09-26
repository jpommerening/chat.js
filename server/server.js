var http = require('http'),
    io = require('socket.io').listen(1338),
    sockets = [];

io.sockets.on('connection', function (socket) {
    "use strict";

    sockets.push(socket);
});


http.createServer(function (req, res) {
    "use strict";

    if (req.url === '/message') {
        var body = "";
        req.on('data', function (chunk) {
            body += chunk;
        });
        req.on('end', function () {
            var i;
            for (i = 0; i < sockets.length; i += 1) {
                sockets[i].emit('message', body);
            }
        });
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();
}).listen('1337');

console.log('Webserver started');
