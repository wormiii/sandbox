"use strict";


function multi1ViewModel()
{
	var self = this;

    self.firstName = ko.observable('Bryan');
    
    self.newCharacter = function()
    {
        sessionStorage.clear();
        sessionStorage.setItem("name", "Bryan");
        var vm = new characterViewModel();
        sessionStorage.setItem("character", vm.SaveToSession());
        location.href = "multi2.html";
    }


    /*
    self.listOfNames = ko.observableArray(
    	[
            {fn: "aaa", ln: "bbb"},
            {fn: "ccc", ln: "ddd"}
      	]
    );

    self.fullName = ko.pureComputed(function() {
        return self.firstName() + " " + self.lastName();
    }, self);
    */
};

ko.applyBindings(new multi1ViewModel());