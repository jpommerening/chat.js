/*global define, Backbone */

define("app/models/message", function () {
    "use strict";

    return Backbone.Model.extend({
        url: '/node/message'
    });
});
