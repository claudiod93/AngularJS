angular.module("autosModule",[] )
.controller("autoCtr", function ($scope){
	$scope.autos=[
			{marca: "Toyota", modelo: "Yaris", ano: "2010"},
			{marca: "Kia", modelo: "Cerato", ano: "2013"},
			{marca: "Chevrolet", modelo: "Spark", ano: "2015"}
	];

	$scope.save = function(){
		$scope.autos.push({marca: $scope.autoNuevo.marca, modelo: $scope.autoNuevo.modelo, ano: $scope.autoNuevo.ano});
	};

});