"use strict";


function multi2ViewModel()
{
	var self = this;

    self.theName = ko.observable(sessionStorage.getItem("name"));
    var vm = new characterViewModel();
    self.character = vm;
    vm.LoadFromSession(sessionStorage.getItem("character"));
    self.otherstuff = ko.observable("asdf");
};

ko.applyBindings(new multi2ViewModel());
