/*global define */
define(function () {
    "use strict";

    function loginController() {}

    loginController.prototype.loginAction = function () {
        console.log('This is the login Action');
    };

    return loginController;
});