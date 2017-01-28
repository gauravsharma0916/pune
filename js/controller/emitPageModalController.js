angular.module("myApp").controller("myEventCtrl", function($scope,emt,$modalInstance){


$scope.ok = function () {
$modalInstance.close();
  };

  $scope.cancel = function () {
  $modalInstance.dismiss('cancel');
  };


});


