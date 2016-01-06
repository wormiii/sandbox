"use strict";


function multi1ViewModel()
{
	var self = this;

    self.firstName = ko.observable('Bryan');
    
    self.newCharacter = function()
    {
        sessionStorage.clear();
        sessionStorage.setItem("name", "Bryan");
        location.href = "multi2.html";
//        window.open("multi2.html");

    //	self.lastName("Daniels");
    }

    self.listOfNames = ko.observableArray(
    	[
            {fn: "aaa", ln: "bbb"},
            {fn: "ccc", ln: "ddd"}
      	]
    );

    self.fullName = ko.pureComputed(function() {
        return self.firstName() + " " + self.lastName();
    }, self);
};

ko.applyBindings(new multi1ViewModel());
