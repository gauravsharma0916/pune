angular.module('myApp').controller('myEventCtrl', function($scope,emt,$modalInstance){


  $scope.user1=emt.obj;

$scope.demo=false;
$scope.ok = function () {
  $scope.demo=true;
$modalInstance.close();
  };

  $scope.cancel = function () {
  $modalInstance.dismiss('cancel');
  };
  

});


