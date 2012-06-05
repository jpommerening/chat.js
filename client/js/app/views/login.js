/**
 * Login View, visualizes the login process
 *
 * @fileOverview views/login.js
 * @author Sebastian Springer
 * @class views_login
 */

/*global define, Backbone */

define(['text!app/views/login.html'], function (template) {
    "use strict";

    return Backbone.View.extend({

        className: 'views_login',
        tagName: 'div',

        events: {},

        initialize: function () {
        },

        render: function () {
            this.$el.html(_.template(template));
            $('body').append(this.$el);
        }
    });
});