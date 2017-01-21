angular.module("myApp").controller("arrayCtrl", function($scope){

$scope.pokal="how to use one time data bindding";

this.hung = function($scope){

alert("hello controller as vm");

   };

 /*  
*/


/*$scope.knp ="ye hai kanpur meri jaaan";*/


$scope.$watch('knp', function(newvalue,oldvalue,scope) { 
	if(newvalue==5){
alert("wow $watch is working fine");
};
if(oldvalue==""){
alert("wow $watch is working fine123");
};




  });




   
});



