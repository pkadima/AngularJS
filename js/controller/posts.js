monApp.controller('PostsCtrl', function($scope, PostFactory){
	$scope.loading = true;
	$scope.posts = PostFactory.getPosts().then(function(posts){
		$scope.loading = false;
		$scope.posts = posts.data;
		console.log(posts);
	}, function(msg){
		alert(msg);
	})
});