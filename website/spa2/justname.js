"use strict";

define(['knockout'], function(ko) {
function justNameViewModel(params)
{
	var self = this;
    self.girlfriend = ko.observable('Bonnie');
}

return { viewModel: justNameViewModel };
});
