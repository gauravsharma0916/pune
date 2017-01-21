angular.module("myApp").controller("filterCont",function($scope,$http){

 $scope.selectedDew = null;
         $http.get("http://127.0.0.1:8080/data/json/filter.json").then(function(response) {
        $scope.dew = response.data;
    });

});
