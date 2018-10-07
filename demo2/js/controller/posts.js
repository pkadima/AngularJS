monApp.controller('PostsCtrl', function($scope, $rootScope, PostFactory){
	$rootScope.loading = true;
	$scope.posts = PostFactory.getPosts().then(function(posts){
		$rootScope.loading = false;
		$scope.posts = posts.data;
		console.log(posts);
	}, function(msg){
		alert(msg);
	})
});