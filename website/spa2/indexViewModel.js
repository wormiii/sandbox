"use strict";

define(['knockout', 'text!./indexViewModel.html'], function(ko, htmlString) {
function indexViewModel(params, componentInfo)
{
	var self = this;

    self.firstName = ko.observable('Bryan');
}

return { createViewModel: indexViewModel, template: htmlString };
});
