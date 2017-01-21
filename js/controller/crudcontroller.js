angular.module("myApp").controller("crudCtrl",['$scope','$window',function($scope,win){
	
		win.alert('HELLO CRUD');
		$scope.name="";
	   $scope.add="";
	   $scope.mob="";
		
	
	$scope.crud =[];
	$scope.makeTable=function(){
		$scope.crud.push({'name':$scope.name , 'add':$scope.add, 'mob':$scope.mob})

	
	}
	
	
	$scope.delRow=function(data){
		
		var index = $scope.crud.indexOf(data);
		console.log(index);
		alert("Deleting index" + index);
		$scope.crud.splice(index, 1);
		
		
	}
  
       

}]);