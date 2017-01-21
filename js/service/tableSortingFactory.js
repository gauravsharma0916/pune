angular.module("myApp").factory('tableSortingFact', function($http) {
	 var obj = {};
    obj.myDetails = function(){
    return $http.get('data/json/tablesorting.json');
               
        };
		return obj;


		

    });
 
 



