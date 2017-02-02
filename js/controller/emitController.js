angular.module('myApp').controller('emitCtrl', function($scope,emt,$modal){
$scope.user=emt.obj;

  $scope.myArray=[];
$scope.send=function(user){  
    $scope.myArray.push({value1:$scope.user.value1,value2:$scope.user.value2});
    console.log($scope.user);
    




/*//firing an event towords upword direction using emit.
  $rootScope.$emit('myEmitEvent', 'emt');  //  emt is the name of service.*/
};


      
//modeal for show emit data
$scope.open=function(){
alert("hello its emit !");
$modal.open({
      templateUrl: '../../../view/emitPageModal.html',
      controller: 'myEventCtrl'
    });

};

});