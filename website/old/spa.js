"use strict";

importFrame("import1");
importFrame("import2");


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

function importFrame(name)
{
    var link = document.querySelector('link[var="'+name+'"]');
    var content = link.import;
    var el = content.querySelector('div');
    $("#frameHolder").append(el.cloneNode(true));
}