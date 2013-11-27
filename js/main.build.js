g({
    paths: {
        'backbone': 'libs/backbone',
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
})
