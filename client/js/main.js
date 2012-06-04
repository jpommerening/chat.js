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
        }
    }
});

requirejs(['backbone', 'app/router'], function (Backbone, Router) {
    "use strict";

    var router = new Router();
    Backbone.history.start();
});