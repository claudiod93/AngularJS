'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MainCtrl', function () {
    var baseUrl = 'http://lorempixel.com/960/450/';
    $scope.setInterval=5000;
  });
