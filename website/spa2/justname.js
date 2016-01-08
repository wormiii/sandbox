"use strict";

define(['knockout'], function(ko) {
function justNameViewModel(a, b)
{
	var self = this;
    self.girlfriend = ko.observable('Bonnie');
}

return { createViewModel: justNameViewModel };
//return justNameViewModel;
});

//ko.applyBindings();
//ko.applyBindings(new multi1ViewModel());