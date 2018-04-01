'use strict';


// Declare app level module which depends on filters, and services
angular.module('jthink', ['jthink.filters']).  
  config(['$routeProvider', function($routeProvider) {  
    $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller:controllers.LoginCTRL});  
    $routeProvider.when//('/register', {templateUrl: 'partials/register.html', controller: controllers.LoginCTRL});  
    $routeProvider.otherwise({redirectTo: '/login'});  
  }]);  
