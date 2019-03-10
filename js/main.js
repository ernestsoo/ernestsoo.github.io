    /**
     * AngularJS Tutorial 1
     * @author Nick Kaye <nick.c.kaye@gmail.com>
     */

    /**
     * Main AngularJS Web Application
     */
    var app = angular.module('tiyaWebApp', [
      'ngRoute'
    ]);

    /**
     * Configure the Routes
     */
    app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        // Home
        .when("/", {templateUrl: "templates/home.html", controller: "PageCtrl"})
    }]);

    /**
     * Controls the Blog
     */
    app.controller('BlogCtrl', function ($scope /* $location, $http */) {
      console.log("Blog Controller reporting for duty.");
    });

    /**
     * Controls all other Pages
     */
    app.controller('PageCtrl', function ( $scope /* $location, $http */) {
      console.log("Page Controller reporting for duty.");



    
    
        
        
    
        
        
    
    
    
    /* =========================================================================
    ============================================================================
    WELCOME LOADING SECTION

    ============================================================================
    ==========================================================================*/


    //**** FIXED ISSUE: .welcome-area set height not within set timeout ****//
    // Set height to user's window height.
    $('.welcome-area').css("height",$(window).height().toString() + "px");
        
    // Change the height on resize.
    $(window).resize(function(){
      $('.welcome-area').css("height",$(window).height().toString() + "px");
    });

    setTimeout(function(){

        $('.welcome-area').css("background","rgba(255, 248, 249, 0.5)");

        setTimeout(function(){
           $('.glyphicon-home-more').fadeTo(0,1.0);
           $('.glyphicon-home-more').animate({marginTop: "15px"}, 1000);
           $('.welcome-discover').fadeTo(0,1.0);
        },1250);

        $('.lds-ripple').css("display","none");

        $('.welcome-logo').animate({marginTop: "6%" },1250);
        $('.welcome-text').fadeTo(1250,1.0);

        // Make Nav Bar appear
        $('.nav-bar').css("visibility","visible");


        // Set height to user's window height.
        //$('.home-area').css("height",$(window).height().toString() + "px");

    },1250);
    
    /* #########################################################################
    ############################################################################
    WELCOME LOADING SECTION
    
    ############################################################################
    ##########################################################################*/
    
    
    
        
        

        
        
        
        
        
        
        
        
        
    
    /* =========================================================================
    ============================================================================
    LANGUAGE SECTION

    ============================================================================
    ==========================================================================*/
    
    // Global variable to track user's selected language.
	$scope.lang = "eng";
        
    
   
        
    $scope.onLangChange = function () {
        
        
      //  $(".text-transition").animate({opacity: 0},300);
        
        
        /* ++++++++++++++++++++++++++++++++
        ENGLISH TEXT
        ++++++++++++++++++++++++++++++++ */
        if($scope.lang == "eng"){
            
            $scope.txt_welcome_message="Tiya Spa & Reflexology is the first of its kind in Kota Kinabalu to offer a variety to those who are seeking authentic Asian massage. All therapist are well trained in their own ethnic wats to sooth the human body of stress.";
            
            $scope.txt_discover="DISCOVER MORE";
            
        }
        /* ++++++++++++++++++++++++++++++++
        MANDARIN TEXT
        ++++++++++++++++++++++++++++++++ */
        if($scope.lang == "ch"){
            
            $scope.txt_welcome_message="Tiya Spa＆Reflexology是哥打京那巴鲁的第一家同类产品，为那些寻求正宗亚洲按摩的人提供各种服务。所有治疗师都训练有素的自己的种族饮食，以舒缓人体的压力。";
            
            $scope.txt_discover="发现更多";
            
        }
        /* ++++++++++++++++++++++++++++++++
        KOREAN TEXT
        ++++++++++++++++++++++++++++++++ */
        if($scope.lang == "kor"){
            
            $scope.txt_welcome_message="티야 스파 & 리플 렉솔 로지 (Tiya Spa & Reflexology)는 코타 키나발루에서 처음으로 진정한 아시아 마사지를 찾는 사람들에게 다양한 것을 제공합니다. 모든 치료사는 스트레스의 인체를 진정시키기 위해 자신의 민족 와트에서 잘 훈련받습니다.";
            
            
            $scope.txt_discover="더 발견하다";
            
        }
        
   
        
        
    }
    
    $scope.onLangChange();
        
        
    /* #########################################################################
    ############################################################################
    LANGUAGE SECTION
    
    ############################################################################
    ##########################################################################*/
    
        
    
    
    
    
    
    
    
    /* =========================================================================
    ============================================================================
    SCROLLING SECTION

    ============================================================================
    ==========================================================================*/

    var MOUSE_OVER = true;
    
    $('body').bind('mousewheel', function(e){
      if(MOUSE_OVER){
        if(e.preventDefault) { e.preventDefault(); }
        e.returnValue = false;
        return false;
      }
    });

    var scrolled = false;
    var scroll_once = false;
    $('.welcome-area').bind('mousewheel', function(e){
      var delta = e.wheelDelta;
      if(delta > 0){
        //go up
      }
      else{
        //go down
          $('.home-area').animate({marginTop: "-"+$(window).height().toString()+"px"},2000);
          setTimeout(function(){ MOUSE_OVER = false; } , 2000);
          scrolled = true;
      }
    });
    
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop(); 

        // If not at top, scroll the main page upwards.
        if (scroll != 0 && scrolled != true)
        {
          $('.home-area').animate({marginTop: "-"+$(window).height().toString()+"px"},1500);

          setTimeout(function(){ MOUSE_OVER = false; } , 2000);
          scrolled = true;
        }
    });
        
    // Dynamically change home area on resize
    $(window).resize(function(){
      $('.home-area').css("margin-top", "-"+$(window).height().toString()+"px");
    });
    
    
    /* #########################################################################
    ############################################################################
    SCROLLING SECTION
    
    ############################################################################
    ##########################################################################*/

    
    
        
        
        
        
        
        
        
        
        
        
        
        
    /* =========================================================================
    ============================================================================
    NAVIGATION BAR SECTION

    ============================================================================
    ==========================================================================*/
        
    
        
    // Set English as Default
    $(".nav-tab-con-eng").find("img").addClass("nav-pop");
    $(".nav-tab-con-eng").find("p").css("text-decoration","underline");
    $(".nav-tab-con-eng").find("img").removeClass("nav-pop");
    
    $(".nav-tab-con").on("mouseenter",function(){
        $(this).find("img").addClass("nav-pop");
        $(this).find("p").css("text-decoration","underline");
        $(".nav-tab-con-"+$scope.lang).find("img").removeClass("nav-pop");
    });
        
    $(".nav-tab-con").on("mouseleave",function(){

        if(!$(this).hasClass("nav-tab-con-"+$scope.lang))
        {
            $(this).find("img").removeClass("nav-pop");
            $(this).find("p").css("text-decoration","none");
            $(".nav-tab-con-"+$scope.lang).find("img").addClass("nav-pop");
            // Reset index?
            if($(this).hasClass(".nav-tab-con-eng"))
            {
                $(this).css("z-index",10);
            }else if ($(this).hasClass(".nav-tab-con-ch"))
            {
                $(this).css("z-index",9);
            }else if ($(this).hasClass(".nav-tab-con-kor"))
            {
                $(this).css("z-index",8);
            }
            
            
        }else{
            $(this).find("img").removeClass("nav-pop");
            $(".nav-tab-con-"+$scope.lang).find("img").addClass("nav-pop");
        }
    });
        
    // Click Button listener for English
    $(".nav-tab-con").click(function(){
        
        if(!$(this).hasClass("nav-tab-con-book"))
        {
            $scope.lang="eng";
            $(".nav-tab-con").find("p").css("text-decoration", "none")
            $(this).find("p").css("text-decoration","underline");
            $(".nav-tab-con").find("img").removeClass("nav-pop");
            $(this).remove("nav-hide");
            $(this).find("img").addClass("nav-pop");
        }
        
    })

        
    
    /* #########################################################################
    ############################################################################
    NAVIGATION BAR SECTION
    
    ############################################################################
    ##########################################################################*/
    
    
        
        
        
        
        
    
    
    
    
    /* =========================================================================
    ============================================================================
    CATEGORY ANIMATION SECTION

    ============================================================================
    ==========================================================================*/

    // Global variable to track user's navigational status.
	var clicked = 0;

    
    // Clicking system for Categories
    $('.home-category-con').click(function(){

				// Reset all menu
				$('.home-category-con').find("div").css("left","-350px");
				$('.home-category-con').find("p").css("margin-left","0px");
				$('.home-category-con').find("p").css("margin-right","0px");
				$('.home-category-con').find("p").css("color","#e52c4c");

				// Highlight selected menu
        $(this).find("div").css("left", "-130px");
        $(this).find("p").css("margin-left", "-35%");
				$(this).find("p").css("margin-right", "35%");
        $(this).find("p").css("color", "white");

    });


		// Shadow Hover effect for each menu item
		$('.home-category-con').hover(function(){
				$(this).find("div").addClass("shadow-hover");
				$(this).find("p").addClass("text-menu-hover");
		},function(){
				$(this).find("div").removeClass("shadow-hover");
				$(this).find("p").removeClass("text-menu-hover");
		});

    
    // Transition duration for different sections.
    var transition_duration = 450;
        
    var current_section = ".section-gallery";


    $('.home-category-links').click(function(){

        //Reset already selected links
        $('.home-category-links').css("text-decoration","none");
        $('.home-category-links').css("color","black");

        // Set current link
        $(this).css("text-decoration","underline");
        $(this).css("color"," #e52c4c");

    });
        

        
    function transition_section(target)
    {
    
        $(current_section).animate({marginTop: $(window).height().toString()+"px"},transition_duration);
        
      
        $(target).css({marginTop: $(window).height().toString()+"px"});
        setTimeout(()=>{
            
            
            $(current_section).css("display","none");
            $(target).animate({marginTop: "20px"},transition_duration);
            
      
            $(target).css("display","unset");
            
            current_section = target;
        },transition_duration);
        

    }

    $('.link-guasha').click(function(){
    
       if(current_section != '.section-guasha')
       {
           transition_section(".section-guasha"); 
       }
      
        
    })
        
    $('.link-gallery').click(function(){
       
        if(current_section != '.section-gallery')
        {
            transition_section(".section-gallery");
        }
        
    })
		function category_reset(temp)
		{
			$(".home-c-"+temp.toString()).animate({marginTop: "-19%"},500);
			$(".home-category-links-"+temp.toString()).css("visibility","hidden");

			setTimeout(function(){
					$(".home-category-links-"+temp.toString()).css("display","none");
					$(".home-category-links-"+temp.toString()).css("visibility","visible");
			},500);
		}
    
        $(".home-category-con-0").click();

        $(".home-category-con-0").click(function(){


				if(clicked != 0)
				{
						category_reset(clicked);
				}

				clicked = 0;

        $(".home-category-links-0").css("display","block");
        $(".home-c-0").animate({marginTop: "0%"},600);

        });


    $(".home-category-con-1").click(function(){


				if(clicked != 1)
				{
						category_reset(clicked);
				}

				clicked = 1;

        $(".home-category-links-1").css("display","block");
        $(".home-c-1").animate({marginTop: "0%"},600);

    });

		$(".home-category-con-2").click(function(){

				if(clicked != 2)
				{
						category_reset(clicked);
				}

				clicked = 2;

				$(".home-category-links-2").css("display","block");
				$(".home-c-2").animate({marginTop: "0%"},600);

		});

		$(".home-category-con-3").click(function(){

				if(clicked != 3)
				{
						category_reset(clicked);
				}
				clicked = 3;

				$(".home-category-links-3").css("display","block");
				$(".home-c-3").animate({marginTop: "0%"},600);

		});
    
    /* #########################################################################
    ############################################################################
    CATEGORY ANIMATION SECTION
    
    ############################################################################
    ##########################################################################*/
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    /* =========================================================================
    ============================================================================
    BOOKING SECTION

    ============================================================================
    ==========================================================================*/
    


		$scope.enter_booking = function()
		{
				$(".booking-shadow").css("display","unset");
		}

		$scope.exit_booking = function()
		{
				$(".booking-shadow").css("display","none");
		}

		$scope.submit_booking = ()=>
		{
            $(".booking-shadow").css("display","none");
                
            var template_params = {
               "reply_to": $(".booking-name").val(),
               "from_name": $(".booking-name").val(),
               "to_name": $(".booking-name").val(),
               "message_html": $(".booking-name").val()
            }

            var service_id = "default_service";
            var template_id = "template_10nMAYeb";
            emailjs.send(service_id, template_id, template_params)
             .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
             }, function(error) {
                console.log('FAILED...', error);
             });
        }


		$(".booking-shadow").css("width",$(window).width()+"px");
		$(".booking-shadow").css("height",$(window).height()+"px");
        
        $(window).resize(function(){
          $(".booking-shadow").css("width",$(window).width()+"px");
		  $(".booking-shadow").css("height",$(window).height()+"px");
        

            // Center Booking Logo
            var booking_img_left = ($(window).width() - $(".booking-img").width()) / 2;
		   //   booking_img_left = booking_img_left - 72;
	       $(".booking-img").css("margin-left",booking_img_left.toString()+"px");

            // Center Booking Cancel Icon
            var booking_cancel_left = ($(window).width() - $(".booking-cancel").width()) / 2;
            booking_cancel_left = booking_cancel_left -10;
            $(".booking-cancel").css("margin-left",booking_cancel_left.toString()+"px");

            var booking_left = ($(window).width() - $(".booking-name").width()) / 2;


            booking_left = booking_left - 20;

            $(".booking-input").css("margin-left",booking_left.toString()+"px");

            $(".booking-description").focus(function(){
                    $(this).animate({height:180,borderRadius:32},750);
                    $(this).attr("placeholder","Enter a list of services you wish from Tiya and the date you want to drop by. You will receive an email from Tiya upon confirming your booking");
            });
        });

		// Center Booking Logo
		var booking_img_left = ($(window).width() - $(".booking-img").width()) / 2;
		booking_img_left = booking_img_left - 72;
	  $(".booking-img").css("margin-left",booking_img_left.toString()+"px");

		// Center Booking Cancel Icon
		var booking_cancel_left = ($(window).width() - $(".booking-cancel").width()) / 2;
		booking_cancel_left = booking_cancel_left -10;
		$(".booking-cancel").css("margin-left",booking_cancel_left.toString()+"px");

		var booking_left = ($(window).width() - $(".booking-name").width()) / 2;


		booking_left = booking_left - 20;

		$(".booking-input").css("margin-left",booking_left.toString()+"px");

		$(".booking-description").focus(function(){
				$(this).animate({height:180,borderRadius:32},750);
				$(this).attr("placeholder","Enter a list of services you wish from Tiya and the date you want to drop by. You will receive an email from Tiya upon confirming your booking");
		});
        
    /* #########################################################################
    ############################################################################
    BOOKING SECTION
    
    ############################################################################
    ##########################################################################*/



    
});