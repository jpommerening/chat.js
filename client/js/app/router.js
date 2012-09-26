/*global define, Backbone, socket, io, location */

define(['backbone', 'socket.io', 'app/controllers/chat'], function (Backbone, io, ChatController) {
    "use strict";

    return Backbone.Router.extend({

        url: location.host,
        port: '1338',

        initialize: function () {
            Backbone.history.start();
        },

        routes: {
            '': 'chat'
        },

        chat: function () {
            var socket = io.connect('http://' + this.url + ':' + this.port),
                chatController = new ChatController(socket);

            chatController.startAction();
        }
    });
});
