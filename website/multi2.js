"use strict";


function multi2ViewModel()
{
	var self = this;

    self.theName = ko.observable(sessionStorage.getItem("name"));
};

ko.applyBindings(new multi2ViewModel());
