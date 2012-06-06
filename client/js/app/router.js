/*global define, Backbone, socket, io */


var socket = null;

define(['backbone', 'app/controllers/login'], function (Backbone, LoginController) {
    "use strict";



    return Backbone.Router.extend({

        url: 'chat.basti.dev',
        port: '1337',


        initialize: function () {
            Backbone.history.start();

            this._openSocket();
        },

        _openSocket: function () {
            if (null === socket) {
                socket = io.connect(this.url + ':' + this.port);
            }
        },

        routes: {
            '': 'login'
        },

        'login': function () {
            var loginController = new LoginController();
            loginController.loginAction();
        }
    });

});