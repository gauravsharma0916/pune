angular.module("myApp").controller("datePickerCtrl",function($scope,$http){
  
       alert('hello datepicker controller');
	   $scope.date = new Date();
	   $scope.mindate= "date.splice(-1)";
	  
   

});

//var date = new Date();
// $scope.maxdate= new Date();