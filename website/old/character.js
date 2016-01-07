

function characterViewModel()
{
    var self = this;

    self.Name = ko.observable("");
    self.Level = ko.observable("");
    self.Class = ko.observable("Engineer");
    self.Credits = ko.observable(0);
    self.XP = ko.observable(0);
    self.Skill = ko.observable(0);


    self.listOfNames = ko.observableArray(
    	[
            {fn: "aaa", ln: "bbb"},
            {fn: "ccc", ln: "ddd"}
      	]
    );

    self.LoadFromSession = function(parsedJSON)
    {
    	var data = JSON.parse(parsedJSON);
    	ko.mapping.fromJS(data, self);
    }

    self.SaveToSession = function()
    {
    	return ko.toJSON(new characterViewModel());
    }
}