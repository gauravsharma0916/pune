angular.module("myApp").controller("targetCtrl",function($scope,$http){
    $http.get("data/json/target.json").then(function(response) {
        $scope.myData = response;
    });

});










