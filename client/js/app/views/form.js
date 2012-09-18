/*global define, Backbone, $ */

define(['text!app/views/form.html', 'app/models/message', 'app/views/message'], function (template, MessageModel, MessageView) {
    "use strict";

    return Backbone.View.extend({

        className: 'row form',
        tagName: 'div',

        events: {'submit #messageForm': 'submitHandle'},

        render: function () {
            this.$el.html(_.template(template));
            $('.container').append(this.$el);
        },

        submitHandle: function (e) {
            e.preventDefault();

            var msg = new MessageModel({name: this.$('#name').val(),
                    message: this.$('#message').val()});
            msg.save();

            this.clearForm();
        },

        clearForm: function () {
            this.$('#message').val('');
        }
    });
});