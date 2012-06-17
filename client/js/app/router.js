/*global define, Backbone, socket, io */

define(['backbone', 'socket.io', 'app/controllers/chat'], function (Backbone, io, ChatController) {
    "use strict";

    return Backbone.Router.extend({

        url: 'chat.basti.dev',
        port: '1338',

        initialize: function () {
            Backbone.history.start();
        },

        routes: {
            '': 'chat'
        },

        chat: function () {
            var socket = io.connect(this.url + ':' + this.port),
                chatController = new ChatController(socket);

            chatController.startAction();
        }
    });
});