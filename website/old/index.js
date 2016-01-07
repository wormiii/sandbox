"use strict";

// index.html scripts

function preMadeName(firstName, lastName) 
{
	var self = this;
	self.fn = firstName;
	self.ln = lastName;
	self.fulln = function()
	{
		return self.fn + " " + self.ln;
	}
}

function myViewModel()
{
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
    		new preMadeName("Barbara", "Daniels"),
    		new preMadeName("Bonnie", "Fillenwarth"),
    		new preMadeName("Jeff", "Siadek"),
    		new preMadeName("Spot", "Oreo"),
    		new preMadeName("Stuff", "Nonsense")
    	]
    );

    self.selectedName = ko.observable(null);

    self.setFromList = function()
    {
    	if (self.selectedName() == null)
    	{
    		return;
    	}
    	var sn = self.selectedName();
    	self.firstName(sn.fn);
    	self.lastName(sn.ln);
    }

    self.fullName = ko.pureComputed(function() {
        return self.firstName() + " " + self.lastName();
    }, self);
};

ko.applyBindings(new myViewModel());


