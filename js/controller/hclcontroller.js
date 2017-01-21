

angular.module("myApp").controller("hclCont",function ($scope){
	this.amit="hello amit";
	$scope.myArray=[];
	$scope.makeTable=function(){
		
		
$scope.myArray.push({'name':$scope.name,'city':$scope.city,'mob':$scope.mob});
		
	}
	
	$scope.delRow=function(data){
		
		//var index = $scope.myArray.indexOf(data);
		//alert("Deleting index" + index);
		$scope.myArray.splice(data, 1);
		
	}
	$scope.current = {};
	$scope.micro = false;
	$scope.update=function(data){
		$scope.current = data;
		$scope.micro = true;
		
		
	}
	//$scope.current = {};
	$scope.save=function(data){
		alert('save sucessfully');
		//$scope.current = {};
		$scope.micro=false;
		
	//$scope.myArray.push(data)
		
	}
	
	
	
	
	

});	