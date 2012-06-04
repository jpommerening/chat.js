requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    }
});

requirejs(['jquery'], function ($) {
    // put main code in here
});