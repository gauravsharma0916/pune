angular.module("myApp").controller("delhiCtrl",function($scope,$http,$location){
	$scope.store=[];
	$scope.sendData = function () {
     $scope.myData =$scope.user;
		$scope.store.push($scope.myData);
		$scope.user="";
	}
        
});
	
	
	
