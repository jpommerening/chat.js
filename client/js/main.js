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

        'socket.io': {
            exports: 'io'
        },

        'app/router': {
            deps: ['backbone']
        }
    }
});

requirejs(['app/router'], function (Router) {
    "use strict";

    var router = new Router();
});