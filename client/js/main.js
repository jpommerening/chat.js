/*global requirejs */

requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        'backbone.sync': {
            deps: ['backbone', 'socket.io'],
            exports: 'Backbone.sync'
        },

        'app/router': {
            deps: ['backbone', 'backbone.sync']
        }
    }
});

requirejs(['app/router'], function (Router) {
    "use strict";

    var router = new Router();
});