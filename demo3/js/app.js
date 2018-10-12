var monApp = angular.module("monApp",[])
    .controller('formController', ['$scope', function($scope) {
      $scope.minlength = 2;
      $scope.maxlength = 20;
      console.log($scope)
    }]);