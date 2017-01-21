angular.module("myApp").controller("griCtrl",function($scope,$http){
    $http.get("data/json/griddemo.json").then(function(response) {
        $scope.myData = response.data;
    });

});










