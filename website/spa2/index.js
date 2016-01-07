"use strict";


    ko.components.register(
        'girlfriend', 
        {
            viewModel: function (params)
            {
                var self = this;
                self.girlfriend = ko.observable('Bonnie');
            },
            template: '<div><span>my girlfriend is:<span><span data-bind="text: girlfriend"><span></div>'
        }         
    );
function indexViewModel()
{
	var self = this;

//    ko.components.register('girlfriend', {
//        viewModel: { require: './justname' },
//        template: { require: 'text!./justname.html' }
//    });



    /*
            template: 
                'mmmmm<div>
                    <span>my girlfriend is:<span>
                    <span data-bind="text: girlfriend"><span>
                </div>'

    */

    self.firstName = ko.observable('Bryan');
    
    self.newCharacter = function()
    {
        sessionStorage.clear();
        sessionStorage.setItem("name", "Bryan");
        var vm = new characterViewModel();
        sessionStorage.setItem("character", vm.SaveToSession());
        location.href = "multi2.html";
    }


    /*
    self.listOfNames = ko.observableArray(
    	[
            {fn: "aaa", ln: "bbb"},
            {fn: "ccc", ln: "ddd"}
      	]
    );

    self.fullName = ko.pureComputed(function() {
        return self.firstName() + " " + self.lastName();
    }, self);
    */
};

ko.applyBindings(new indexViewModel());




