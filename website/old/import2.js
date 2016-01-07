"use strict";

function import2ViewModel()
{
	var self = this;

    self.stuff1 = ko.observable('Fillenwarth');
};

ko.applyBindings(new import2ViewModel());

