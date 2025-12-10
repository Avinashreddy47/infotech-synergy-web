var app = angular.module('infotechApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController',
    })
    .when('/services', {
      templateUrl: 'views/services.html',
      controller: 'ServicesController',
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutController',
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController',
    })
    .otherwise({ redirectTo: '/' });
});

app.controller('HomeController', function ($scope) {
  $scope.message = 'Welcome to InfoTech Synergy';
});

app.controller('ServicesController', function ($scope) {
  $scope.message = 'Our Services';
});

app.controller('AboutController', function ($scope) {
  $scope.message = 'About Us';
});

app.controller('ContactController', function ($scope) {
  $scope.message = 'Contact Us';
});
