/*global define */
define(['backbone'], function (Backbone) {

    "use strict";

    return Backbone.Router.extend({

        initialize: function () {
            Backbone.history.start();
        },

        routes: {

            '': 'start'

        },

        'start': function () {
            // do something
        }
    });

});