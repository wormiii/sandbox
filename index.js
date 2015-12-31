"use strict";

//x = 3;
//window.alert("adsfd");

function myViewModel() {
	var self = this;

    self.firstName = ko.observable('Bryan');
    
    self.lastName = ko.observable('Daniels');
    
    self.personAge = ko.observable(123);

    self.setToUberCoolname = function()
    {
    	self.firstName("Bryan");
    	self.lastName("Daniels");
    }

    self.listOfNames = ko.observableArray(
    	[
    	]
    );

    self.fullName = ko.pureComputed(function() {
        return self.firstName() + " " + self.lastName();
    }, self);
};

ko.applyBindings(new myViewModel());


//window.alert("end");