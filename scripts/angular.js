	// create the module and name it scotchApp
	var tiyaApp = angular.module('tiyaApp', ['ngRoute']);


	// create the controller and inject Angular's $scope
	tiyaApp.controller('mainController', function($scope) {
		// create a message to display in our view


        

// A $( document ).ready() block.
$( document ).ready(function() {
    
    var clicked = 0;
    
    // Clicking system for Categories
    $('.home-category-con-1').click(function(){
        clicked = 1;
        
        $('.home-category-con-1 div').css("left", "-80%");
        $('.home-category-con-1 p').css("margin-left", "-47%");
        $('.home-category-con-1 p').css("color", "white");
        
    });
    
    
    $('.home-category-links').click(function(){
        
        //Reset already selected links
        $('.home-category-links').css("text-decoration","none");
        $('.home-category-links').css("color","black");
        
        // Set current link
        $(this).css("text-decoration","underline");
        $(this).css("color"," #e52c4c");
        
        $(".section-gallery").animate({marginLeft: $(window).width().toString()+"px"},500);
    });
    
    
    
    $(".home-category-con-1").click(function(){
        
        $(".home-category-links").css("display","block"); 
        $(".home-c-t").animate({marginTop: "0%"},750);
    
    });
    
    
  //  $('body').css("height", $(window).height().toString() + "px");
    
var MOUSE_OVER = true;
$('body').bind('mousewheel', function(e){
  if(MOUSE_OVER){
    if(e.preventDefault) { e.preventDefault(); } 
    e.returnValue = false; 
    return false; 
  }
});

//$('.welcome-area').mouseenter(function(){ MOUSE_OVER=true; });
//$('.welcome-area').mouseleave(function(){ MOUSE_OVER=false; });

$('.welcome-area').bind('mousewheel', function(e){
  var delta = e.wheelDelta;
  if(delta > 0){
    //go up
  }
  else{
    //go down
      
      $('.home-area').animate({marginTop: "-"+$(window).height().toString()+"px"},2000);
      setTimeout(function(){ MOUSE_OVER = false; } , 2000);  
  }
});

    
    
    
    
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

        $('.welcome-logo').animate({marginTop: "3%" },1250);
        $('.welcome-text').fadeTo(1250,1.0);
        
        // Make Nav Bar appear
        $('.nav-bar').css("visibility","visible");
        
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
                   // $('.welcome-area').animate({marginTop: "-"+$(window).height().toString()+"px"},2000);
                    //$('.home-area').css("display","unset");
                    //$('.home-area').css("margin-top", "-1000px");
                    
                  
            },0)
            
            // To be Continued...
      /*          $('.welcome-area').css("height",$(window).height().toString() + "px");
            
            setTimeout(function(){
                $('.welcome-area').css("display","none");
                $('.home-area').css("position","initial");
            },2200);
            
*/
            

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