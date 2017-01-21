angular.module("myApp").controller("myCtrl",function($scope,$location){
	
$scope.pure=false;
$scope.click1 =  function(){
$location.path("/kanpur");
$scope.pure=true;
}

$scope.click2 = function(){
$location.path("/delhi");
}

$scope.click3 = function(){
$location.path("/pune");
}
$scope.click4 = function(){
$location.path("/update");
 }
 
 $scope.click5 = function(){
$location.path("/facebook");
 }
 
 $scope.click6 = function(){
$location.path("/responsive");
 }
 
 
  $scope.click7 = function(){
$location.path("/demopage");
 }
 
  $scope.click8 = function(){
$location.path("/modal");
 }
 
 $scope.click9 = function(){
	 console.log("hello");
$location.path("/divgame");
 }
 
  $scope.click10 = function(){
$location.path("/hcl");
 }
 
 $scope.click11 = function(){
$location.path("/target");
 }
 
 
 $scope.click12 = function(){
$location.path("/target1");
 }
 
 
 $scope.click13 = function(){
console.log("date picker");
$location.path("/datepicker");
 }
 
 
  $scope.click14 = function(){
console.log("Hello crud");
$location.path("/crud");
 }
 
  $scope.click15 = function(){
console.log("Hello do muneer task of configurable form");
$location.path("/muneer");
 }
 
 
 $scope.click16 = function(){
console.log("Hello array");
$location.path("/array");
 }
 
  $scope.click17 = function(){
console.log("Hello Rwd");
$location.path("/rwd");
 }
 
 $scope.click18 = function(){
console.log("Sapient Task");
$location.path("/sapient");
 }


 $scope.click19 = function(){
console.log("grid view");
$location.path("/grid");
 }


  $scope.click20 = function(){
console.log("filter");
$location.path("/filter");
 }
 
 $scope.click21 = function(){

$location.path("/gridconfiger");
 }

 $scope.click22 = function(){
console.log("filter");
$location.path("/tablesorting");
 }
 
  $scope.click23 = function(){
console.log("emit");
$location.path("/emit");
 }
 
});
