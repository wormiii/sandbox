define(
["knockout"], 
function(ko) 
{

function page2vm(mainvm, index, selectthispage)
{
    var self = this;
    self.mainvm = ko.observable(mainvm);
    self.index = index;
    self.visible = ko.observable(false);    
    self.selectpage = function()
    {
     	selectthispage(index);
    };
}

return page2vm;

});
