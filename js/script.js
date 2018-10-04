var monApp = angular.module("monApp",['ngRoute']);

monApp.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/',{templateUrl:'partials/home.html', controller:'PostCtrl'})
		.when('/comments',{templateUrl:'partials/comments.html', controller:'CommentsCtrl'})
		.otherwise({redirectTo:'/'});

	$locationProvider.hashPrefix('');
});

monApp.controller('CommentsCtrl', function ($scope){
	console.log($scope);
	$scope.comments = [
	  {
	    "username": "Young Benjamin",
	    "email": "youngbenjamin@ginkogene.com",
	    "city": "Healy",
	    "content": "Adipisicing quis exercitation magna nostrud incididunt. Commodo ex eiusmod sunt consectetur deserunt cupidatat velit fugiat laboris do deserunt. Proident magna excepteur Lorem culpa esse eiusmod aute reprehenderit sint tempor ut. Voluptate dolor aliqua ex nisi cillum id cillum sint esse mollit mollit laboris. Esse sunt duis sunt dolore proident minim elit est et laborum laborum ullamco laboris irure."
	  },
	  {
	    "username": "Cantrell Ray",
	    "email": "cantrellray@ginkogene.com",
	    "city": "Denio",
	    "content": "Reprehenderit deserunt culpa ipsum deserunt cillum officia dolore et laboris excepteur fugiat aliquip. Exercitation nulla culpa deserunt sunt magna sunt nostrud duis eu incididunt ipsum id in excepteur. Fugiat non pariatur sint duis incididunt ut anim elit amet dolor. Consectetur laboris dolor occaecat exercitation. Consectetur reprehenderit proident exercitation voluptate ut."
	  },
	  {
	    "username": "Gilliam Rice",
	    "email": "gilliamrice@ginkogene.com",
	    "city": "Bethany",
	    "content": "Elit cupidatat minim aliquip elit exercitation proident. Occaecat do tempor ut veniam. Velit et mollit dolore incididunt occaecat proident ipsum quis. Aute pariatur do pariatur magna mollit voluptate eu. Irure velit consectetur labore reprehenderit non ipsum."
	  },
	  {
	    "username": "Velazquez Reeves",
	    "email": "velazquezreeves@ginkogene.com",
	    "city": "Blue",
	    "content": "Voluptate quis nisi cupidatat est anim proident cillum fugiat incididunt incididunt nostrud culpa cillum cillum. Ad dolore dolore ipsum tempor ullamco dolor cillum nostrud deserunt consequat dolor nulla enim est. Ex incididunt enim exercitation laboris sit quis nisi. Cupidatat non ut aliquip nostrud enim et ullamco nostrud eu labore amet. Veniam officia veniam cillum non sit."
	  },
	  {
	    "username": "Ila Parker",
	    "email": "ilaparker@ginkogene.com",
	    "city": "Fontanelle",
	    "content": "Magna officia quis Lorem ea officia veniam quis. Reprehenderit velit commodo deserunt ad dolor est id ipsum pariatur in irure occaecat in veniam. Sunt quis id elit occaecat magna et sint veniam. Sit excepteur mollit sunt tempor laboris minim esse do aute reprehenderit voluptate veniam. Nulla ullamco qui commodo consectetur pariatur Lorem sint mollit pariatur velit ipsum nulla voluptate."
	  },
	  {
	    "username": "Dolores Hayes",
	    "email": "doloreshayes@ginkogene.com",
	    "city": "Hondah",
	    "content": "Cupidatat cillum esse deserunt aliqua ut laborum ullamco. Quis minim magna in officia qui amet incididunt nulla est culpa. Nostrud qui mollit est cupidatat tempor amet. Proident et qui adipisicing consequat in sint non sit esse laboris. Quis velit quis velit ex officia."
	  }
	];
});

monApp.controller('PostCtrl', function($scope){
	$scope.posts = [
		{
		"name": "Aquoavo",
		"contents": "Tempor veniam cupidatat sunt sit consectetur labore esse et aute duis ipsum laboris labore. Minim ex pariatur ullamco laborum eiusmod commodo non duis occaecat.",
		"comments": [
		  {
		    "name": "Patton Dunn",
		    "email": "pattondunn@aquoavo.com",
		    "city": "Bodega",
		    "content": "Tempor velit sint eu ipsum. Sit et adipisicing occaecat non nisi sunt qui enim proident ipsum aute ad excepteur."
		  },
		  {
		    "name": "Victoria Vega",
		    "email": "victoriavega@aquoavo.com",
		    "city": "Brule",
		    "content": "Reprehenderit eiusmod sint fugiat nisi Lorem amet. Ex voluptate velit in eiusmod labore non deserunt amet laborum ullamco voluptate reprehenderit."
		  },
		  {
		    "name": "Therese Palmer",
		    "email": "theresepalmer@aquoavo.com",
		    "city": "Cornfields",
		    "content": "Cillum enim consequat dolore ipsum aute minim. Veniam amet id qui dolor ea."
		  }
		]
		},
		{
		"name": "Isodrive",
		"contents": "Aliquip Lorem deserunt et reprehenderit. Dolor enim Lorem labore ipsum.",
		"comments": [
		  {
		    "name": "Griffin Chandler",
		    "email": "griffinchandler@isodrive.com",
		    "city": "Brethren",
		    "content": "Consequat deserunt tempor magna amet aliquip occaecat. Anim officia quis incididunt aliqua anim consectetur reprehenderit velit aute ea."
		  },
		  {
		    "name": "Angela Oneil",
		    "email": "angelaoneil@isodrive.com",
		    "city": "Rew",
		    "content": "Ea ipsum esse consequat in sint laborum exercitation in qui quis. Excepteur Lorem qui deserunt labore id sit."
		  }
		]
		},
		{
		"name": "Navir",
		"contents": "Do minim sit mollit aute aliquip laboris tempor mollit aliquip ullamco quis nostrud culpa aliquip. Sint eiusmod magna nulla qui.",
		"comments": [
		  {
		    "name": "Mindy Jennings",
		    "email": "mindyjennings@navir.com",
		    "city": "Keller",
		    "content": "Est pariatur excepteur ea eiusmod ad elit ad. Tempor excepteur velit adipisicing aute."
		  },
		  {
		    "name": "Tiffany Hutchinson",
		    "email": "tiffanyhutchinson@navir.com",
		    "city": "Wyano",
		    "content": "Commodo consequat aliqua magna nostrud ad. Sit ad sunt in ullamco do magna excepteur consectetur nisi voluptate Lorem non mollit."
		  },
		  {
		    "name": "Avila Acevedo",
		    "email": "avilaacevedo@navir.com",
		    "city": "Virgie",
		    "content": "Voluptate ex magna exercitation ut elit esse. Voluptate dolor labore reprehenderit voluptate ullamco Lorem culpa occaecat."
		  }
		]
		},
		{
		"name": "Tropolis",
		"contents": "Pariatur ex est nisi eu aliquip pariatur sunt. Tempor sunt ut eiusmod mollit excepteur exercitation duis culpa ullamco anim deserunt.",
		"comments": [
		  {
		    "name": "Claudette Bates",
		    "email": "claudettebates@tropolis.com",
		    "city": "Hackneyville",
		    "content": "Anim est laboris proident commodo. Quis pariatur est culpa consectetur do anim labore."
		  }
		]
		},
		{
		"name": "Powernet",
		"contents": "Deserunt ut duis non sunt ea. Non ea incididunt occaecat consequat culpa ipsum.",
		"comments": [
		  {
		    "name": "Estela Britt",
		    "email": "estelabritt@powernet.com",
		    "city": "Englevale",
		    "content": "Aute culpa magna exercitation duis nulla laboris duis velit nisi nisi exercitation cillum. Amet ullamco sunt laboris Lorem in."
		  }
		]
		},
		{
		"name": "Nikuda",
		"contents": "Quis est cillum incididunt mollit duis pariatur occaecat. Tempor eiusmod magna enim quis nostrud ex.",
		"comments": [
		  {
		    "name": "Lara Moon",
		    "email": "laramoon@nikuda.com",
		    "city": "Robinette",
		    "content": "Deserunt commodo quis ad enim aliquip veniam amet enim. Excepteur est mollit proident proident labore in sit."
		  },
		  {
		    "name": "Shanna Pate",
		    "email": "shannapate@nikuda.com",
		    "city": "Nutrioso",
		    "content": "Anim id do ex laborum. Officia veniam cillum ex pariatur labore nulla aute exercitation consectetur."
		  }
		]
		},
		{
		"name": "Polarax",
		"contents": "Dolore consequat dolor id voluptate eu nulla occaecat ea enim voluptate velit excepteur fugiat. Magna cupidatat pariatur laborum nisi duis ea ut aute officia fugiat commodo.",
		"comments": [
		  {
		    "name": "Robbie Banks",
		    "email": "robbiebanks@polarax.com",
		    "city": "Brooktrails",
		    "content": "Consectetur do dolor aute nulla fugiat dolor eu consequat id. Proident sit eiusmod culpa enim sunt officia nostrud voluptate mollit irure."
		  },
		  {
		    "name": "Madden Gibbs",
		    "email": "maddengibbs@polarax.com",
		    "city": "Innsbrook",
		    "content": "Cupidatat quis ex ipsum dolore nostrud. Amet minim est consequat mollit esse excepteur cillum magna enim mollit sit."
		  },
		  {
		    "name": "Leta Burton",
		    "email": "letaburton@polarax.com",
		    "city": "Campo",
		    "content": "Sunt consequat est eu consequat ullamco deserunt laboris. Quis minim non et commodo qui deserunt enim dolor id sint ex adipisicing exercitation."
		  }
	    ]
	  }
	]
});