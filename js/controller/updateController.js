angular.module("myApp").controller("updateCtrl",function($scope,$http,$location){
	
	$scope.arr=[];
	$scope.may=false;
	$scope.add = function() {
		 $scope.may=true;
		$scope.new=$scope.user;
		$scope.arr.push($scope.new);
		$scope.user="";
    
	}
	

        
});
	
	
	
