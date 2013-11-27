var SITE = SITE || {};

requirejs.config({
    paths: {
        'backbone': 'libs/backbone',
        'bootstrap': 'libs/bootstrap',
        'jquery': 'libs/jquery-1.10.2.min',
        'jquery.cookie': 'libs/jquery.cookie',
        'jquery.easing': 'libs/jquery.easing',
        'jquery.json': 'libs/jquery.json',
        'underscore': 'libs/underscore'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            deps: ['jquery'],
            exports: '_'
        },
        'jquery.cookie': ['jquery'],
        'jquery.easing': ['jquery'],
        'jquery.json': ['jquery']
    }
});

require([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    $(document).ready(function() {
    });
});
