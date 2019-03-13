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
    GLOBAL SECTION

    ============================================================================
    ==========================================================================*/
        
    // Global variable to track user's selected language.
	$scope.lang = "eng";
        
    /* #########################################################################
    ############################################################################
    GLOBAL SECTION
    
    ############################################################################
    ##########################################################################*/
        


    
    /* =========================================================================
    ============================================================================
    MOBILE SECTION

    ============================================================================
    ==========================================================================*/
        
    $(window).resize(function(){
        mobile_function();
    });
        
    mobile_function();

        function mobile_function()
        {
            
            $(".mobile-content").css("width",$(window).width().toString() + "px");
            $(".mobile-content").css("min-height",$(window).height().toString() + "px" );

            var shadow_width = $(window).width() * 0.8;

            $(".hamburger-shadow").css("width", shadow_width.toString() + "px");
            $(".hamburger-shadow").css("height", $(window).height().toString() + "px" );

            $(".hamburger-shadow").css("margin-left","-"+ shadow_width.toString() + "px"  );


            $scope.open_hamburger = function() {
                $(".hamburger-shadow").animate({marginLeft: "0px"});
            }

            $scope.close_hamburger = function() {
                $(".hamburger-shadow").animate({marginLeft: "-"+ shadow_width.toString() + "px"});
            }

            $scope.lang_bool = false;


            $scope.lang_toggle = function() {

                if($scope.lang_bool == false)
                {
                    $(".glyphicon-lang").animate(
                    { deg: 90 },
                    {
                      duration: 400,
                      step: function(now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                      }
                    }
                   );

                    $(".lang-options").css("display","unset"); 

                    $scope.lang_bool = true;
                }else{

                    $(".glyphicon-lang").animate(
                    { deg: 0 },
                    {
                      duration: 400,
                      step: function(now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                      }
                    }
                   );

                    $(".lang-options").css("display","none");

                    $scope.lang_bool = false;

                }

            }

            $scope.m_toggle_lang= function(paramLang) {

                $scope.lang= paramLang;

                $scope.onLangChange();

                $(".glyphicon-lang").animate(
                    { deg: 0 },
                    {
                      duration: 400,
                      step: function(now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                      }
                    }
                   );

                $(".lang-options").css("display","none");

                $scope.lang_bool = false;


                $scope.close_hamburger();


            }

            $scope.m_toggle_section = function(sectionParam) {

                $(".m-section").css("display","none");

                $(".m-section-"+sectionParam).css("display","unset");
            }
        
        }


    
        
        
    /* #########################################################################
    ############################################################################
    MOBILE SECTION
    
    ############################################################################
    ##########################################################################*/
        
    
        
        
    
    
    
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

        //$('.welcome-area').css("background","rgba(255, 248, 249, 0)");
        $('.welcome-area').css("background","rgba(0,0,0, 0.25)");


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
    

    
   
        
    $scope.onLangChange = function () {
        
        
      //  $(".text-transition").animate({opacity: 0},300);
        
        
        /* ++++++++++++++++++++++++++++++++
        ENGLISH TEXT
        ++++++++++++++++++++++++++++++++ */
        if($scope.lang == "eng"){
            
            $scope.txt_booking = "BOOK AN APPOINTMENT";
            
            //Changes for txt_booking
            $(".txt_booking").css("left","42px");
            
            $scope.txt_welcome_message="Tiya Spa & Reflexology is the first of its kind in Kota Kinabalu to offer a variety to those who are seeking authentic Asian massage. All therapist are well trained in their own ethnic wats to sooth the human body of stress.";
            
            $scope.txt_discover="DISCOVER MORE";
            
            $scope.cat_1 = "GALLERY";
            $scope.cat_2 = "THERAPIES";
            $scope.cat_3 = "MASSAGES";
            $scope.cat_4 = "PRODUCTS";
            
            $scope.txt_contact = "CONTACT";
            
        }
        /* ++++++++++++++++++++++++++++++++
        MANDARIN TEXT
        ++++++++++++++++++++++++++++++++ */
        if($scope.lang == "ch"){
            
            $scope.txt_booking = "预约";
            
            //Changes for txt_booking
            $(".txt_booking").css("left","90px");
            
            $scope.txt_welcome_message="Tiya Spa＆Reflexology是哥打京那巴鲁的第一家同类产品，为那些寻求正宗亚洲按摩的人提供各种服务。所有治疗师都训练有素的自己的种族饮食，以舒缓人体的压力。";
            
            $scope.txt_discover="发现更多";
            
            $scope.cat_1 = "画廊";
            $scope.cat_2 = "治疗";
            $scope.cat_3 = "按摩";
            $scope.cat_4 = "产品";
            
            $scope.txt_contact = "联系";
            
        }
        /* ++++++++++++++++++++++++++++++++
        KOREAN TEXT
        ++++++++++++++++++++++++++++++++ */
        if($scope.lang == "kor"){
            
            $scope.txt_booking="약속을 잡다"
            
            //Changes for txt_booking
            $(".txt_booking").css("left","77px");

            
            $scope.txt_welcome_message="티야 스파 & 리플 렉솔 로지 (Tiya Spa & Reflexology)는 코타 키나발루에서 처음으로 진정한 아시아 마사지를 찾는 사람들에게 다양한 것을 제공합니다. 모든 치료사는 스트레스의 인체를 진정시키기 위해 자신의 민족 와트에서 잘 훈련받습니다.";
            
            
            $scope.txt_discover="더 발견하다";
            
            $scope.cat_1 = "갱도";
            $scope.cat_2 = "치료법";
            $scope.cat_3 = "마사지";
            $scope.cat_4 = "제품";
            
            $scope.txt_contact = "접촉";
            
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
      if($(window).height() > 580)
      {
        $('.home-area').css("margin-top", "-"+$(window).height().toString()+"px");
      }
      
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
    SERVICE SECTION

    ============================================================================
    ==========================================================================*/
        
        $scope.service_set_up = function(){
             
                
                setTimeout(function(){
                    var top_service_title = $(".service-video").height() - $(".service-video-text").height();
                    var left_service_title = $(".service-video").width() - $(".service-video-text").width();
                    
                    top_service_title = top_service_title + 14;
                    left_service_title = left_service_title / 2;
                    
             
                    $(".service-video-text").css("top",top_service_title.toString()+"px");
                    $(".service-video-text").css("left",left_service_title.toString()+"px");
                    $(".service-video-text").animate({opacity: 1},1000);
                },1000)
            
            
                $(window).resize(function(){ 
                
                    var top_service_title = $(".service-video").height() - $(".service-video-text").height();
                    var left_service_title = $(".service-video").width() - $(".service-video-text").width();
                    
                    top_service_title = top_service_title + 14;
                    left_service_title = left_service_title / 2;
                    
             
                    $(".service-video-text").css("top",top_service_title.toString()+"px");
                    $(".service-video-text").css("left",left_service_title.toString()+"px");
                
                });
                
                

                
        }
   
        
        
    /* #########################################################################
    ############################################################################
    SERVICE SECTION
    
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
            
                  // Center Booking Logo
            var booking_img_left = ($(window).width() - $(".booking-img").width()) / 2;
		   //   booking_img_left = booking_img_left - 72;
	       $(".booking-img").css("margin-left",booking_img_left.toString()+"px");

		}

		$scope.exit_booking = function()
		{
				$(".booking-shadow").css("display","none");
		}
        
        var email_body = "";
        var email_target = "";
        var email_name = "";
        
		$scope.submit_booking = ()=>
		{
            // Get content of booking
            email_body = $(".d-booking-description").val();
            email_target = $(".d-booking-email").val();
            email_name = $(".d-booking-name").val();
            console.log(email_target);
            
            
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "ernestsoo22@gmail.com",
                Password : "8cee3215-e693-46c5-90ac-59b508a8bfdc",
                To : email_target.toString(),
                From : "ernestsoo22@gmail.com",
                Subject: "Sucessful Booking!",
                Body: '<!DOCTYPE html PUBLIC " -//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"> <head> <title> </title> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <meta name="viewport" content="width=device-width"> <style type="text/css">body, html { margin: 0px; padding: 0px; -webkit-font-smoothing: antialiased; text-size-adjust: none; width: 100% !important; } table td, table { } #outlook a { padding: 0px; } .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; } .ExternalClass { width: 100%; } @media only screen and (max-width: 480px) { table, table tr td, table td { width: 100% !important; } img { width: inherit; } .layer_2 { max-width: 100% !important; } .edsocialfollowcontainer table { max-width: 25% !important; } .edsocialfollowcontainer table td { padding: 10px !important; } .edsocialfollowcontainer table { max-width: 25% !important; } .edsocialfollowcontainer table td { padding: 10px !important; } } </style> </head> <body style="padding:0; margin: 0;"> <table style="height: 100%; width: 100%; background-color: #efefef;" align="center"> <tbody> <tr> <td valign="top" id="dbody" data-version="2.31" style="width: 100%; height: 100%; padding-top: 30px; padding-bottom: 30px; background-color: #efefef;"> <!--[if (gte mso 9)|(IE)]><table align="center" style="max-width:600px" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--> <table class="layer_1" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; box-sizing: border-box; width: 100%; margin: 0px auto;"> <tbody> <tr> <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;"> <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--> <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"> <table class="edcontent" style="border-collapse: collapse;width:100%" border="0" cellpadding="0" cellspacing="0"> <tbody> <tr> <td class="edimg" valign="top" style="padding: 0px; box-sizing: border-box; text-align: center;"> <img style="border-width: 0px; border-style: none; max-width: 600px; width: 100%;" width="600" alt="Image" src="https://api.elasticemail.com/userfile/0eeea5f4-4373-4534-97e2-f46c914ce9a4/Tiya_Logo.png"> </td> </tr> </tbody> </table> </div> <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--> </td> </tr> <tr> <td class="drow" valign="top" align="center" style="background-color: #e52c4c; box-sizing: border-box; font-size: 0px; text-align: center;"> <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--> <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"> <table class="edcontent" style="border-collapse: collapse;width:100%;" border="0" cellpadding="0" cellspacing="0"> <tbody> <tr> <td class="edtext" valign="top" style="padding: 20px; text-align: left; color: #5f5f5f; font-size: 12px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"> <p class="style2 text-center" style="text-align: center; margin: 0px; padding: 0px; color: #ffffff; font-size: 32px; font-family: Helvetica, Arial, sans-serif;">Thank you for your Booking! <br> </p> <p style="margin: 0px; padding: 0px;"> <span style="color: #ffffff;"> <br>Your Booking has been successfully submitted to Tiya Spa and you should be expecting a response soon within 24 hours. </span> </p> </td> </tr> </tbody> </table> </div> <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--> </td> </tr> <tr> <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;"> <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--> <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"> <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%"> <tbody> <tr> <td valign="top" class="edtext" style="padding: 20px; text-align: left; color: #5f5f5f; font-size: 12px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"> <p style="margin: 0px; padding: 0px;">Here is your Booking Summary: </p> </td> </tr> </tbody> </table> </div> <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--> </td> </tr> <tr> <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;"> <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--> <div class="layer_2" style="display: inline-block; vertical-align: top; width: 100%; max-width: 600px;"> <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%"> <tbody> <tr> <td valign="top" class="edtext" style="padding: 20px; text-align: left; color: #5f5f5f; font-size: 12px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"> <p style="margin: 0px; padding: 0px;"> <strong>Customer Name: </strong> '+email_name+' </p> <p style="margin: 0px; padding: 0px;"> <br> </p> <p style="margin: 0px; padding: 0px;"> <strong>Booking Description: </strong> '+email_body+' </p> </td> </tr> </tbody> </table> </div> <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--> </td> </tr> <tr> <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;"> <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--> <div class="layer_2" style="display: inline-block; vertical-align: top; width: 100%; max-width: 600px;"> <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%"> <tbody> <tr> <td valign="top" class="edtext" style="padding: 20px; text-align: left; color: #5f5f5f; font-size: 12px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"> <p style="margin: 0px; padding: 0px;"> <br> </p> <p style="margin: 0px; padding: 0px;"> <br> </p> </td> </tr> </tbody> </table> </div> <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--> </td> </tr> <tr> <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;"> <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--> <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"> <table class="edcontent" style="border-collapse: collapse;width:100%" border="0" cellpadding="0" cellspacing="0"> <tbody> <tr> <td class="edtext" valign="top" style="padding: 10px; text-align: left; color: #5f5f5f; font-size: 12px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"> <p style="text-align: center; font-size: 11px; margin: 0px; padding: 0px;">If you no longer wish to receive mail from us, you can <a href="{unsubscribe}" style="background-color: initial; color: #828282; font-size: 12px; font-family: Helvetica, Arial, sans-serif; text-decoration: none;">unsubscribe</a> <br>{accountaddress} </p> </td> </tr> </tbody> </table> </div> <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--> </td> </tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--> </td> </tr> </tbody> </table> </body></html>'
            }).then(
              message => console.log(message)
            );
        }


		$(".booking-shadow").css("width",$(window).width()+"px");
		$(".booking-shadow").css("height",$(".home-area").height()+"px");
        
        $(window).resize(function(){
          $(".booking-shadow").css("width",$(window).width()+"px");
		  $(".booking-shadow").css("height",$(".home-area").height()+"px");
        

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

		var booking_left = ($(window).width() - $(".booking-input-desktop-measure").width()) / 2;


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