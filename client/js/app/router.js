/*global define */
define(['backbone', 'app/controllers/login'], function (Backbone, LoginController) {
    "use strict";

    return Backbone.Router.extend({

        initialize: function () {
            Backbone.history.start();
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