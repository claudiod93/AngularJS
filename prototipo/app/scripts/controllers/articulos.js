'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('ArticulosCtrl', function ($scope) {
      $scope.posts = [
        {
          title: "Alimentos buenos para la salud",
          content: "Lorem ipsum dolor sit amet"
        },
        {
          title: "Alimentos buenos para la salud",
          content: "Lorem ipsum dolor sit amet"
        },
        {
          title: "Alimentos buenos para la salud",
          content: "Lorem ipsum dolor sit amet"
        }
      ];
  });
