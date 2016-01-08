"use strict";

requirejs.config({
    baseUrl: '',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        knockout: 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min',
        text: 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min'
    }
});


requirejs(['knockout'], function(ko) {
    var self = this;

    ko.components.register(
        'girlfriend', 
        {
            viewModel: { require: './justname' },
            template: { require: 'text!./justname.html' }
        }         
    );

    ko.components.register(
        'mom', 
        {
            viewModel: { require: './mom' },
            template: { require: 'text!./mom.html' }
        }         
    );

    ko.components.register(
        'mainview', 
        {
            viewModel: { require: './indexViewModel' },
            template: { require: 'text!./indexViewModel.html' }
        }         
    );

    ko.applyBindings();
});



