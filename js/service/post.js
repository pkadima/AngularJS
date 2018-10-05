monApp.factory('PostFactory', function($http, $q, $timeout){
	var factory = {
		posts : false,
	  	getPosts : function(){
	  		var deferred = $q.defer();
	  		if(factory.posts !== false){
	  			deferred.resolve(factory.posts);
	  		}else{
		  		$http.get('../js/posts.json')
		  			.then(function(data, status) {
		  				factory.posts = data;
	  					deferred.resolve(factory.posts);	
		  			}, function(data, status) {
		  				deferred.reject(data);
		  			});
	  		}
	  		return deferred.promise;
	  	},
	  	getPost: function(id){
	  		var deferred = $q.defer();
	  		var post = {};
	  		var posts = factory.getPosts().then(function(posts) {
	  			angular.forEach(posts.data, function(value, key) {
					if(value.id == id){
						post = value
					}
				});
				deferred.resolve(post);
	  		}, function(msg){
	  			deferred.reject(msg);
	  		});
	  		return deferred.promise;
	  	}
	}
	return factory;
})