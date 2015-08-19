'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MainCtrl', function ($scope) {
    var baseUrl = 'http://lorempixel.com/960/450/';
    $scope.setInterval=5000;

    $scope.slides = [
      {
        tittle: 'Aprende a mantener en forma',
        image: baseUrl + 'sports/',
        text: 'Practica algún deporte todos los días'
      },
      {
        tittle: 'Buena Alimentación',
        image: baseUrl + 'food/',
        text: 'La importancia de las verdudras y frutas'
      },
      {
        tittle: 'En contacto con la naturaleza',
        image: baseUrl + 'nature/',
        text: 'Mantente en armonia con la naturaleza'
      }
    ];
  });
