// Code goes here
angular.module('app', ['ngMessages'])
.run(function ($templateCache, $http) {
  $http.get('scriptTemplate.html')
  .then(function(response) {
    $templateCache.put('error-messages', response.data); 
  })
})


angular.module('app').controller('mainCtrl', function($scope) {
  $scope.submit = function(valid) {
      if(valid) {
        
      }
      else {

      }
    };
  
  $scope.user1 = {
    name: '',
    required: "",
    min: "",
    max: "",
    email: ""
  }
  
});

angular.module('app').directive('userInfoCard', function(){
  return {
    templateUrl: "userInfoCard.html",
    restrict: "E",
    scope: {
      user: "="
    },
    controller: function($scope) {
      $scope.knightMe = function(user) {
        user.rank = "knight";
      }
      console.log($scope)
    }
  }
});