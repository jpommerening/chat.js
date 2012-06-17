/*global define */
define(['app/models/message', 'app/views/message', 'app/views/form'],
    function (MessageModel, MessageView, FormView) {
        "use strict";

        function chatController(socket) {
            socket.on('message', _.bind(this.displayMessage, this));
        }

        chatController.prototype.startAction = function () {
            var form = new FormView();
            form.render();
        };

        chatController.prototype.displayMessage = function (data) {
            var msg = new MessageModel($.parseJSON(data)),
                msgView = new MessageView({model: msg});

            msgView.render();
        };

        return chatController;
    });