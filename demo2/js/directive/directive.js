monApp.directive('ngComment', function() {
	return {
		scope:{
			comment :'='
		},
		restrict: 'E',
		templateUrl: 'partials/_comment.html'
	}
})

monApp.directive('datePicker',  function(){
	return {
		restrict: 'C',
		scope: {
			options : '=datePickerOptions'
		},
		link: function(scope, element, attrs){
			$(element).pickadate(scope.options)
		}
	}
})

/* Exemple de transclution */
monApp.directive('ngTest', function(){
	return {
		restrict: 'A',
		template : '<div>Salut <strong>{{username}}</strong><div ng-transclude></div></div>',
		transclude: true,
		scope: {
			username: '='
		}
	}
})

/* Gestion des onglets */

monApp.directive('ngTabs', function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'directives/tabs.html',
		scope: {},
		controller: function($scope){
			$scope.tabs = [];
			$scope.select = function(tab){
				angular.forEach($scope.tabs, function(t){
					t.selected = false;
				})
				tab.selected = true;
			}
			this.add = function(tab){
				if($scope.tabs.length === 0){
					$scope.select(tab);
				}
				$scope.tabs.push(tab)
			}
		}
	}
})

monApp.directive('ngTab', function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'directives/tab.html',
		scope: {
			title : '@'
		},
		require: '^ngTabs',
		link: function(scope, element, attrs, tabsCtrl){
			scope.selected = false;
			tabsCtrl.add(scope);
		}
	}
})
// monApp.directive('time', function(dateFilter, $interval){
// 	return {
// 		restrict: 'E',
// 		template: '{{time}}',
// 		scope:{},
// 		link: function(scope, element, attrs){
// 			interval = $interval(function(){
// 				scope.time = dateFilter(new Date(), 'hh:mm:ss');

// 				element.on('$destroy', function(){
// 					$interval.cancel(interval);
// 				})
// 				console.log('time changed')
// 			}, 1000)
// 		}
// 	}
// })