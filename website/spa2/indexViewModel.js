"use strict";

define(['knockout'], function(ko) {
function indexViewModel(params)
{
	var self = this;


    self.firstName = ko.observable('Bryan');
}

return { viewModel: indexViewModel };
});
