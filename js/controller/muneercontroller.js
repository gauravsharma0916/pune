angular.module("myApp").controller("muneerCtrl",function($scope,$http){
	$http.get("data/json/muneer.json").success(function(response){
		   
		   $scope.store=response;
		 
	   });
	$scope.name ="";
	$scope.add ="";
	$scope.mob ="";
	
	$scope.muneer=[];
   $scope.save=function(index){
	   
	   
	   $scope.muneer.push({"name":"$scope.name","add":"$scope.add","mob":"$scope.mob"})
   };
   
   
   $scope.delete =function(index){
	   $scope.muneer.splice(index,1);
	   
   };
   
   
  
     $scope.current={};
     $scope.beta=false;
$scope.update =function(data){
	$scope.current=data;
	$scope.beta=true;
	alert("hello update");
	  
	   
                             };
   
   $scope.savefinal =function(data){
	   $scope.current={};
	   
                                   };
   
   
});