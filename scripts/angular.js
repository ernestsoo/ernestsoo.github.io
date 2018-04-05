	// create the module and name it scotchApp
	var tiyaApp = angular.module('tiyaApp', ['ngRoute']);


	// create the controller and inject Angular's $scope
	tiyaApp.controller('mainController', function($scope) {
		// create a message to display in our view


        

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    
    
    // Declare Global JQuery/JS Variables.
    
    setTimeout(function(){
          /*  $('.welcome-area').css("background"," #c0392b");*/
            
        
        $('.welcome-area').css("background","#fff8f9");
     //   $('.welcome-area').css("background","white");
       // $('.welcome-area').css("background-image","url('images/Background.jpg')");
        
        setTimeout(function(){

           $('.glyphicon-home-more').fadeTo(0,1.0);
           $('.welcome-discover').fadeTo(0,1.0);

        },1250);    
        
        $('.lds-ripple').css("display","none");

        $('.welcome-logo').animate({marginTop: "6.5%" },1250);
        $('.welcome-text').fadeTo(1250,1.0);
        
        
        // Set height to user's window height.
        $('.welcome-area').css("height",$(window).height().toString() + "px");
        // Set height to user's window height.
        $('.home-area').css("height",$(window).height().toString() + "px");
        
    },1250);
    
    
    $(window).resize(function() {
  
        // Set height when user resizes window
        $('.welcome-area').css("height",$(window).height().toString() + "px");
        $('.home-area').css("height",$(window).height().toString() + "px");
        
    });
    
    

    // Scrolling function.
    $(function () {


    var position = $(window).scrollTop();


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > position) {
            
                 setTimeout(function(){
            $('.welcome-area').animate({marginTop: "-"+$(window).height().toString()+"px"},2000);
            // Temporary Solution?
          //  $('.home-area').animate({marginTop: "0px"},2000);
           // disableScroll();
            
       
                $('.home-area').css("display","unset");
            },300)
            
            // To be Continued...
            $('.welcome-area').css("height",$(window).height().toString() + "px");
            
            setTimeout(function(){
                $('.welcome-area').css("display","none");
                $('.home-area').css("position","relative");
            },2200);
            

            // scrolling downwards, only here for dev purpose
        } else {
            // scrolling upwards 
        }

        position = scroll;
    });

});
    

    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

        function preventDefault(e) {
          e = e || window.event;
          if (e.preventDefault)
              e.preventDefault();
          e.returnValue = false;  
        }

        function preventDefaultForScrollKeys(e) {
            if (keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
        }

        function disableScroll() {
          if (window.addEventListener) // older FF
              window.addEventListener('DOMMouseScroll', preventDefault, false);
          window.onwheel = preventDefault; // modern standard
          window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
          window.ontouchmove  = preventDefault; // mobile
          document.onkeydown  = preventDefaultForScrollKeys;
        }

        function enableScroll() {
            if (window.removeEventListener)
                window.removeEventListener('DOMMouseScroll', preventDefault, false);
            window.onmousewheel = document.onmousewheel = null; 
            window.onwheel = null; 
            window.ontouchmove = null;  
            document.onkeydown = null;  
        }


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