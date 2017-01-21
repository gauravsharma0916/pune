angular.module("myApp").controller("puneCtrl",function($scope,$location){
	$scope.show= false;
	$scope.modal=function(){
	 $scope.show= true;
	}
	
	$scope.gaur=function(){
    $location.path('/gaurav');
		
		
		
	}
	$scope.hide=function(){
	
	}
	
	$scope.hide=function(){
		$scope.show=false;
		
	}	
	
	
	
});