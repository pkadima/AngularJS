var monApp = angular.module("monApp",['ngRoute','ngResource']);

monApp.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/',{templateUrl:'partials/home.html', controller:'PostsCtrl'})
		.when('/comments/:id',{templateUrl:'partials/comments.html', controller:'CommentsCtrl'})
		.otherwise({redirectTo:'/'});

	$locationProvider.hashPrefix('');
});