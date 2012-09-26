/*global define, Backbone, $ */

define(['text!app/views/message.html'], function (template) {
    "use strict";

    return Backbone.View.extend({

        className: 'row message',
        tagName: 'div',

        render: function () {
            var data = {name: this.model.get('name'),
                message: this.model.get('message')};

            this.$el.html(_.template(template, data));
            $('#chatcontainer').append(this.$el);

            this.scrollToBottom();
        },

        scrollToBottom: function () {
            $("#chatcontainer").scrollTop($("#chatcontainer")[0].scrollHeight);
        }
    });
});