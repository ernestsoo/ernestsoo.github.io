	// create the module and name it scotchApp
	var tiyaApp = angular.module('tiyaApp', ['ngRoute']);


	// create the controller and inject Angular's $scope
	tiyaApp.controller('mainController', function($scope) {
		// create a message to display in our view


        

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    
    setTimeout(function(){
          /*  $('.welcome-area').css("background"," #c0392b");*/
            
        
        $('.welcome-area').css("background","#FFE9EC");
        
        setTimeout(function(){
          // $('.welcome-area').css("background", "-webkit-linear-gradient(to top, #ffc3a0, #FFAFBD)");
        //   $('.welcome-area').css("background", "linear-gradient(to top, #ffc3a0, #FFAFBD)");
            
           $('.glyphicon-home-more').fadeTo(0,1.0);
           $('.welcome-discover').fadeTo(0,1.0);

        },1250);    
        
        $('.lds-ripple').css("display","none");

        $('.welcome-logo').animate({marginTop: "9%" },1250);
        $('.welcome-text').fadeTo(1000,1.0);
        
        $('.welcome-area').css("height","200%");
    },1250);
    

});
      
        
	});

	tiyaApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	tiyaApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

    
	// configure our routes
	tiyaApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});