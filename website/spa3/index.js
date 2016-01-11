"use strict";

function vmvm()
{
    var self = this;

    self.selectpage = function(index)
    {
        self.pages()[index].selectthispage();
    }



    self.pages = ko.observableArray([
        new pagevm(self, 0),
        new pagevm(self, 1),
        new pagevm(self, 2)
    ]);
}

var vm = new vmvm();

function pagevm(mainvm, index)
{
    var self = this;
    self.mainvm = mainvm;
    self.index = index;
    self.visible = ko.observable(false);
    self.label = ko.observable();
    self.text = ko.observable();

    self.selectthispage = function()
    {
        _.forEach(
            self.mainvm.pages(), 
            function(item) 
            {
                item.visible(false);
            }
        );
        var toshowitem =
            _.find(
                self.mainvm.pages(), 
                function(item) 
                {
                    return item.index == self.index;
                }
            );
        toshowitem.visible(true);    
    }
}


ko.components.register('page1stuff', 
{
    viewModel: 
    {
        createViewModel: function(params, componentInfo) 
        {
            var index = 0;
            var pagevm = vm.pages()[index];
            pagevm.label("yay this is page " + index);
            pagevm.text("data " + index);
            return pagevm;
        }
    },
    template:
        '<div data-bind="visible: visible">\
            <span>a1a1a1</span>\
            <span data-bind="text: label"></span>\
            <span data-bind="text: text"></span>\
        </div>'
});


ko.components.register('page2stuff', 
{
    viewModel: 
    {
        createViewModel: function(params, componentInfo) 
        {
            var index = 1;
            var pagevm = vm.pages()[index];
            pagevm.label("woo this is page " + index);
            pagevm.text("info " + index);
            return pagevm;
        }
    },
    template:
        '<div data-bind="visible: visible">\
            <span>b2b2b2</span>\
            <span data-bind="text: label"></span>\
            <span data-bind="text: text"></span>\
        </div>'
});

ko.components.register('page3stuff', 
{
    viewModel: 
    {
        createViewModel: function(params, componentInfo) 
        {
            var index = 2;
            var pagevm = vm.pages()[index];
            pagevm.label("squee this is page " + index);
            pagevm.text("value " + index);
            return pagevm;
        }
    },
    template:
        '<div data-bind="visible: visible">\
            <span>c3c3c3</span>\
            <span data-bind="text: label"></span>\
            <span data-bind="text: text"></span>\
        </div>'
});




ko.applyBindings(vm);

