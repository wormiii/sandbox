define(
["knockout"], 
function(ko) 
{

function indexViewModel()
{
    var self = this;

    self.something1_1 = ko.observable("aaa");
    self.something1_2 = ko.observable("bbb");
    self.something2_1 = ko.observable("ccc");
    self.something2_2 = ko.observable("ddd");
    self.common = ko.observable("bryan");

    self.pages = ko.observableArray([]);
}

return indexViewModel;

});




