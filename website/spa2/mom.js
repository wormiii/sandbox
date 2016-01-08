"use strict";

define(['knockout'], function(ko) {
function momViewModel(params)
{
	var self = this;
    self.momName = ko.observable('Barbara');
}

return { viewModel: momViewModel };
});
