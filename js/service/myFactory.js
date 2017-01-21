angular.module("myApp").factory('myFact1', function($http) {
 

    var obj = {};
      obj.showData=function(){
    $http.get('http://127.0.0.1:8080/data/json/target.json');
        // you can do some processing here
        obj.content = data;
    };    

    return obj;  
    console.log(obj);

});



/*
var gaurav ={};
    gaurav.showData=function(){
	return  $http.get('http://127.0.0.1:8080/data/json/target.json')
    };    
return gaurav; 

*/