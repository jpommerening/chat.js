/*global define */
define(['app/models/login', 'app/views/login'], function (LoginModel, LoginView) {
    "use strict";

    function loginController() {}

    loginController.prototype.loginAction = function () {
        var loginView = new LoginView();
        loginView.render();
    };

    return loginController;
});