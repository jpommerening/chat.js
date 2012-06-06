/**
 * Login Model, represents the business logic needed to log in a certain user
 *
 * @fileOverview models/login.js
 * @author Sebastian Springer
 * @class models_login
 */

/*global define, Backbone */


define(function () {
    "use strict";

    return Backbone.Model.extend({

        url: 'login',

        login: function (nickname) {
            this.save({nickname: nickname}, {success:_.bind(this.gotoChat, this)});
        },

        gotoChat: function () {
            window.location.hash = '#chat';
        }

    });
});
