"use strict";

requirejs.config({
    baseUrl: '',
    paths: {
        knockout: 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min',
        lodash: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min',
        text: 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
        jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min'
    }
});


require(
['knockout', 'jquery', 'text!./localized.json'], 
function(ko, $, loc)
{
	var localizedData = $.parseJSON(loc);
	var textToLocalizedText = function(text)
	{
		return localizedData[text];
	}
	ko.bindingHandlers.localizedtext = 
	{
	    init: function(element, valueAccessor, allBindings, viewModel, bindingContext)
	    {
	    	var value = ko.unwrap(valueAccessor());
			var localizedText = textToLocalizedText(value);
	    	$(element).text(localizedData[value]);
	    },
	    update: function(element, valueAccessor, allBindings, viewModel, bindingContext)
	    {
	    }
	};


	function vm()
	{
		var self = this;
		self.stuff1 = ko.observable("oreo");
		self.stuff2 = ko.observable("bryan");
	}





	ko.applyBindings(new vm());
});
