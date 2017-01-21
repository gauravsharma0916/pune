angular.module("myApp").controller("target1Ctrl",function(myFact1,tableSortingFact,$scope,$http){
    $http.get("data/json/target.json").then(function(response) {
        $scope.myInfo = response.data;
    });

});










