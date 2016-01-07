"use strict";

function import1ViewModel()
{
	var self = this;

    self.stuff1 = ko.observable('Bonnie');
};

ko.applyBindingsToNode($("#import1"), new import1ViewModel());

