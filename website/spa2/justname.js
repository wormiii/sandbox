"use strict";

define(['knockout'], function(ko) {
function justNameViewModel(params)
{
	var self = this;
	self.label = ko.observable(params.label)
    self.girlfriend = ko.observable(params.defaultValue);
    self.units = ko.observable(params.theunits);
}

return { viewModel: justNameViewModel };
});
