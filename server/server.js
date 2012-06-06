/*global require, console */

var io = require('socket.io').listen(1337);

function Users() {
    "use strict";

    this.users = {};
}

Users.prototype.userExists = function (name) {
    "use strict";

    return undefined !== this.users[name];
};

Users.prototype.addUser = function (userdata) {
    "use strict";

    this.users[userdata.name] = userdata;
};

var users = new Users();


io.sockets.on('connection', function (socket) {
    "use strict";

    socket.on('login', function (data) {

        var userdata = {'name': data.model.username,
                        'date': new Date()};

        if (!users.userExists(userdata.name)) {
            users.addUser(userdata);
        }

        var reply = {id: data.id, payload: '', success: true};

        socket.emit('reply', reply);
    });

});

console.log('Socket Server started');