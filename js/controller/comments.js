monApp.controller('CommentsCtrl', function ($scope, PostFactory, $routeParams){
	$scope.loading = true;
	var post =  PostFactory.getPost($routeParams.id).then(function(post){
		$scope.loading = false;
		console.log(post);
		$scope.title = post.name;
		$scope.comments = post.comments;
	}, function(msg){
		alert(msg);
	});
});