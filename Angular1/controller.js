angular.module("autos", [
	'servicio'
	])
.controller("autoController", function ($scope, cacheService){
	$scope.autos=[
			{marca: "Toyota", modelo: "Yaris", ano: "2010"},
			{marca: "Kia", modelo: "Cerato", ano: "2013"},
			{marca: "Chevrolet", modelo: "Spark", ano: "2015"}
	];

	cacheService.setCache("AtuosNuevos");


	$scope.$watch(function(){
		return cacheService.getCache();
	}, function(){
		$scope.valor = cacheService.getCache();
	});
});






