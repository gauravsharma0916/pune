angular.module("myApp").factory('myFact', function($http) {
	 var obj = {};
    obj.myDetails = function(){
    return $http.get('data/json/population.json');
               
        }
		return obj;
    }
 
  
);



