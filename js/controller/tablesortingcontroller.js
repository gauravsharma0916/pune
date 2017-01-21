angular.module("myApp").controller("tablesortingCtrl",function(tableSortingFact,$scope,$http,$location){
var self =this;

$scope.fac=tableSortingFact;

tableSortingFact.myDetails().then(function(response){
               $scope.rave = response.data;
         });





//data sharing code starts here b/w two controller //
$scope.dekho = function(data){    
$scope.share=data + myDetails().rave;
console.log(share);
tableSortingFact.addlist($scope.share);

}
//data sharing code ends here b/w two controller //







$scope.sortColumn="name";
$scope.reverseSort=false;
$scope.fullSort = ''; //for full sorting 


$scope.sortData=function(column){
$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
$scope.sortColumn = column;
console.log(column);
                                };


    
    $scope.market=true;
    $scope.showRowData=function(index,data){
    	$scope.current=data;
	$scope.market=false;
		console.log(data);
                                            };

$scope.closeModel=function(){
 $scope.market=true;

                            };

    


});
