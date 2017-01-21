angular.module('myApp').directive('myDir', function($compile){
 return {
    restrict: 'EA',
    priority:0,
    templateUrl:'view/customdirectivetemplate.html',
    replace:'true',
    transclude:'true',
    require: '^ngModel',
    scope:'true',
    controllerUrl:'../controller/myCustomdirectiveController.js',
    bindToController: 'true',
    scope:{
    amit:'@'
          },
    link: function (scope,element) {
    element.on('click', function () {
                  alert('You clicked me! for link function exicution');
                                    });
	
                                           }



        }

});


