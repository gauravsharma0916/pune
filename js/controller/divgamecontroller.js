angular.module("myApp").controller("divgameCtrl",function($scope,$http,$location,myFact){
	   
       $scope.friend1=false;
	$scope.openDav1 = function() {
		$scope.friend1=!$scope.friend1
		
	}
	
	
	       $scope.friend2=false;
	$scope.openDav2 = function() {
		$scope.friend2=!$scope.friend2
		
	}
	
	       $scope.friend3=false;
	$scope.openDav3 = function() {
		$scope.friend3=true;
		
	}
	
	
	       $scope.friend4=false;
	$scope.openDav4 = function() {
		$scope.friend4=true;
		
	}
	
	
	       $scope.friend5=false;
	$scope.openDav5 = function() {
		$scope.friend5=true;
		
	}
	
	 $scope.friend6=false;
	$scope.openDav6 = function() {
		$scope.friend6=true;
		
	}
	
	$scope.showPopulation= function() {
		myFact.myDetails().success(function(response){
        $scope.userDetail = response;
		});	
		
	};
	
	
	
	
	
});