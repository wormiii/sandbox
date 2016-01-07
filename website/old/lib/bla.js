//"use strict";


function spaViewModel()
{
	var self = this;

    self.firstName = ko.observable('Bryan');
    
    self.setToUberCoolname = function()
    {
    	self.firstName("Bryan");
    	self.lastName("Daniels");
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

ko.applyBindings(new spaViewModel());