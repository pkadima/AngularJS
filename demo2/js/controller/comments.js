monApp.controller('CommentsCtrl', function ($scope, $rootScope, PostFactory, $routeParams){
	$rootScope.loading = true;
	$scope.newComment = {};
	PostFactory.getPost($routeParams.id).then(function(post){
		$rootScope.loading = false;
		$scope.title = post.name;
		$scope.comments = post.comments;
	}, function(msg){
		alert(msg);
	});

	$scope.addComment = function(){
		$scope.comments.push($scope.newComment);
		PostFactory.add($scope.newComment).then(function(){

		}, function(){
			alert("Erreur lors de l'enregistrement du message");
		})
		$scope.newComment = {};
	}
});