angular.module('myApp').directive('targetOne', function($compile, myFact1){
 return {
    restrict: 'E',
	template:'<h1>{{gaurav}}</h1>',
	link: function (scope, element, attrs) {
         scope.gaurav = myFact1.obj;
		 console.log(scope.obj);
		 
		 
            }
    
 }

});




/* custom directive code 



app.directive('changeIt',function($compile, myData){
    return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                scope.name = myData.name;
            }
        }
 });
		
		
		
		myService.async().then(function(response) {
    $scope.data = response.data;
	
  })


*/