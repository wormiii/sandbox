"use strict";

define(['knockout', 'text!./indexViewModel.html'], function(ko, htmlString) {
function indexViewModel(params)
{
	var self = this;

    self.firstName = ko.observable('Bryan');
}

return { viewModel: indexViewModel, template: htmlString };
});
