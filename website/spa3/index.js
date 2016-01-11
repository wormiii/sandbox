"use strict";

function vm()
{
    var self = this;
    self.page1visible = ko.observable(false);
    self.page2visible = ko.observable(false);
    self.page3visible = ko.observable(false);

    self.stuff1 = ko.observable("aaa");
    self.stuff2 = ko.observable("bbb");
    self.stuff3 = ko.observable("ccc");

    self.page1click = function()
    {
        self.page2visible(false);
        self.page3visible(false);
        self.page1visible(true);
    }
    self.page2click = function()
    {
        self.page1visible(false);
        self.page3visible(false);
        self.page2visible(true);
    }
    self.page3click = function()
    {
        self.page1visible(false);
        self.page2visible(false);
        self.page3visible(true);
    }
}



ko.applyBindings(new vm());

