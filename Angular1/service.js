angular.module("servicio", []);

angular.module("servicio").service("cacheService", function (){
	var cache = "";

	this.setCache = function(value){
		cache = value;
	};

	this.getCache = function(){
		return cache;
	};

});