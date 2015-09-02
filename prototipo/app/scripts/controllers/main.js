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

    // Modelo para los tres bloques de contenidos
    var baseURL='http://lorempixel.com/200/200/'
    $scope.contenido=[
      {
        img:baseURL+'people',
        title:'Sobre Nosotros',
        sumario:'Somos una empresa comprometida con la vida sana'
      },
      {
        img:baseURL+'business',
        title:'Nuestros Servicios',
        sumario:'Ofrecemos asesoría profesional para mantenerse Sanos, buena alimentación, cuales son los mejores ejercicios para tí, etc.'
      },
      {

        img:baseURL+'transport',
        title:'Contáctanos',
        sumario:'#333, Buena vida Online, Plaza Central, Durance, Zip-432167'
      }
    ];
  });
