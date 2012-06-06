/*global define */
define(['app/models/login', 'app/views/login'], function (LoginModel, LoginView) {
    "use strict";

    function loginController() {}

    loginController.prototype.loginAction = function () {
        var loginModel = new LoginModel(),
            loginView = new LoginView({model: loginModel});
        loginView.render();
    };

    return loginController;
});