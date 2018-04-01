'use strict';

/* Controllers */

angular.module('jthink.controllers', []).controller('LoginCTRL',function ($scope) {  
  $scope.login={};
  $scope.submit = function() {  
    console.log($scope.login.email);  
    console.log($scope.login.password);  
    // do some process, invoke the service layer  
 
  };  
}]);  
