var app = angular.module('migrainApp');

app.controller('statsControl', function($scope, $firebase){
	var sync = envService.getLog();
	$scope.migraines = sync.$asArray();



});