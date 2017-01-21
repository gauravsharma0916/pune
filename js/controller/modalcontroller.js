angular.module("myApp").controller("modalCtrl",function($scope,$http,$location){
	   
       $scope.market=false;
	$scope.openModal = function() {
		$scope.market=true;
		
	}
	$scope.close=function(){
		$scope.market=false;
	}
	
	
	$scope.india=function(){
		$scope.market=true;
	}
	
	
	
	
	
	
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});




        
});



	
	
	
