/*global Backbone, callbackStack, socket */

(function () {
    "use strict";

    Backbone.sync = function (method, model, options) {

        Backbone.sync = function(method, model, options) {
            if (undefined === callbackStack) {
                callbackStack =  {
                    lastid: 0,
                    callbacks: {}
                };
            } else {
                callbackStack.lastid += 1;
            }
            callbackStack.callbacks[callbackStack.lastid] = {
                success: options.success,
                error: options.error
            };

            var payload = {
                method: method,
                model: model,
                id: callbackStack.lastid
            };

            var url = model.url;
            if (_.isFunction(model.url)) {
                url = model.url();
            }

            socket.emit(url, payload);

            socket.on('reply', function (data) {

                if (data.hasOwnProperty('token')) {
                    socket.token = data.token;
                }

                if (callbackStack.callbacks.hasOwnProperty(data.id)) {
                    if (callbackStack.callbacks[data.id].hasOwnProperty(data.success)) {
                        var func = callbackStack.callbacks[data.id][data.success];
                        if (_.isFunction(func)) {
                            func(data.payload);
                        }
                    }
                    delete (callbackStack.callbacks[data.id]);
                }
            });
        };
    };
}).call(this);