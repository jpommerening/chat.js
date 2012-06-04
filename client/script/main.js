requirejs.config({
    baseUrl: 'script/library',
    paths: {
        application: '../application'
    }
});

requirejs(['jquery'], function ($) {
    // put main code in here
});