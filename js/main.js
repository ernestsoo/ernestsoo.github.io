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
    $scope.service_title_extra  = 14;
    $scope.service_cache = 0;
        
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
        
    $scope.hamburger= false;
    mobile_function();

        function mobile_function()
        {
            
            $(".mobile-content").css("width",$(window).width().toString() + "px");
            $(".mobile-content").css("min-height",$(window).height().toString() + "px" );

            var shadow_width = $(window).width() * 0.8;

            $(".hamburger-shadow").css("width", shadow_width.toString() + "px");
            $(".hamburger-shadow").css("min-height", $(window).height().toString() + "px" );

            $(".hamburger-shadow").css("margin-left","-"+ shadow_width.toString() + "px"  );
            
            if($(".hamburger-shadow").height() > $(window).height())
            {
                $(".mobile-content").css("height", $(".hamburger-shadow").height().toString() + "px");
            }


            $scope.open_hamburger = function() {
                $(".hamburger-shadow").animate({marginLeft: "0px"});
                
                setTimeout(function(){
                    $scope.hamburger= true;
                },1000)
                
            }

            $scope.close_hamburger = function() {
                if($scope.hamburger)
                {
                    $(".hamburger-shadow").animate({marginLeft: "-"+ shadow_width.toString() + "px"});
                }
                
                $scope.hamburger = false;
                
            }

            $scope.lang_bool = false;
            $scope.menu_bool = false;


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
             $scope.menu_toggle = function() {
                
                

                if($scope.menu_bool == false)
                {
                    $(".glyphicon-menu").animate(
                    { deg: 90 },
                    {
                      duration: 400,
                      step: function(now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                      }
                    }
                   );

                    $(".menu-options").css("display","unset"); 

                    $scope.menu_bool = true;
                }else{

                    $(".glyphicon-menu").animate(
                    { deg: 0 },
                    {
                      duration: 400,
                      step: function(now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                      }
                    }
                   );

                    $(".menu-options").css("display","none");

                    $scope.menu_bool = false;

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
                
                $scope.close_hamburger();
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

        //$('.welcome-area').css("background","la(255, 248, 249, 0)");
        $('.welcome-area').css("background","rgba(189, 195, 199, 0.00)");


        setTimeout(function(){
           $('.glyphicon-home-more').fadeTo(0,1.0);
           $('.glyphicon-home-more').animate({marginTop: "15px"}, 1000);
           $('.welcome-discover').fadeTo(0,1.0);
        },1250);

        $('.lds-ripple').css("display","none");

        $('.welcome-logo').css("display","none")
       // $('.welcome-text').fadeTo(1250,1.0);

        // Make Nav Bar appear
        $('.nav-bar').css("visibility","visible");


        // Set height to user's window height.
        //$('.home-area').css("height",$(window).height().toString() + "px");

    },1250);
        
    var combined_height = $(".discover-1").height() + $(".discover-2").height();
    
    var discover_height = $(window).height() - combined_height -100;
    
    $(".discover-1").css("margin-top",discover_height.toString() + "px");
        
        
    var social_top = $(window).height() - $(".social-media-group").height();
        
    social_top = social_top / 2;
        
    $(".social-media-group").css("margin-top", social_top+"px");
        
    var social_left = $(window).width() - $(".social-media-group").width();
        
    $(".social-media-group").css("margin-left", (social_left-10)+"px");
        
     $(window).resize(function(){ 
         
            var combined_height = $(".discover-1").height() + $(".discover-2").height();
    
            var discover_height = $(window).height() - combined_height -100;

            $(".discover-1").css("margin-top",discover_height.toString() + "px");


            var social_top = $(window).height() - $(".social-media-group").height();

            social_top = social_top / 2;

            $(".social-media-group").css("margin-top", social_top+"px");

            var social_left = $(window).width() - $(".social-media-group").width();

            $(".social-media-group").css("margin-left", (social_left-10)+"px");
     });
    
        
    /* #########################################################################
    ############################################################################
    WELCOME LOADING SECTION
    
    ############################################################################
    ##########################################################################*/
    
    
    
        
    /* =========================================================================
    ============================================================================
    SERVICE SECTION

    ============================================================================
    ==========================================================================*/
        
        $(".service-intro-background").css("height", ($(window).height() * 0.85).toString() + 'px');
        
        $(window).resize(function(){
            $(".service-intro-background").css("height", ($(window).height() * 0.85).toString() + 'px');
        });
        $scope.service_set_up = function(index){
             
                $scope.service_cache = index;
                
                setTimeout(function(){
                    var top_service_title = $(".service-video-"+index.toString()).height() - $(".service-video-text-"+index.toString()).height();
                    var left_service_title = $(".service-video-"+index.toString()).width() - $(".service-video-text-"+index.toString()).width();
                    
                    top_service_title = top_service_title + $scope.service_title_extra;
                    left_service_title = left_service_title / 2;
                    
             
                    $(".service-video-text-"+index.toString()).css("top",top_service_title.toString()+"px");
                    $(".service-video-text-"+index.toString()).css("left",left_service_title.toString()+"px");
                    $(".service-video-text-"+index.toString()).animate({opacity: 1},1000);
                },1000)
            
            
                $(window).resize(function(){ 
                
                    var top_service_title = $(".service-video-"+index.toString()).height() - $(".service-video-text-"+index.toString()).height();
                    var left_service_title = $(".service-video-"+index.toString()).width() - $(".service-video-text-"+index.toString()).width();
                    
                    top_service_title = top_service_title + $scope.service_title_extra;
                    left_service_title = left_service_title / 2;
                    
             
                    $(".service-video-text-"+index.toString()).css("top",top_service_title.toString()+"px");
                    $(".service-video-text-"+index.toString()).css("left",left_service_title.toString()+"px");
                
                });
                
                
                
        }
   
        
        
    /* #########################################################################
    ############################################################################
    SERVICE SECTION
    
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
            
            $scope.service_title_extra = 8;
            
            $scope.txt_booking = "BOOK AN APPOINTMENT";
            
            //Changes for txt_booking
            $(".txt_booking").css("left","42px");
            
            $scope.booking_title = "BOOK AN APPOINTMENT";
            
            $(".d-booking-name").attr("placeholder","Name");
            $(".d-booking-email").attr("placeholder","Email");
            $(".d-booking-description").attr("placeholder","Description");
            
            $scope.booking_successful = "Successful Booking！";
            $scope.booking_new = "NEW BOOKING";
            
            $scope.txt_welcome_message="Tiya Spa & Reflexology is the first of its kind in Kota Kinabalu to offer a variety to those who are seeking authentic Asian massage. All therapist are well trained in their own ethnic wats to sooth the human body of stress.";
            
            $scope.txt_discover="DISCOVER MORE";
            
            $scope.cat_1 = "GALLERY";
            $scope.cat_2 = "MENU";
                $scope.cat_2_sub_1 = "VIP OVERNIGHT SPA";
                $scope.cat_2_sub_2 = "VIP SPA";
                $scope.cat_2_sub_3 = "LOCAL BORNEO HERBAL BALL + BODY MASSAGE";
                $scope.cat_2_sub_4 = "'RANAU' LOCAL HOT STONE MASSAGE THERAPY";
            
            $scope.cat_3 = "LOCATE US";
            $scope.cat_4 = "PRODUCTS";
            
            $scope.txt_contact = "CONTACT";
            
            $scope.service_start = "Price Starting from:";
            $scope.service_book_now = "BOOK NOW";
            
            $scope.booking_word = "BOOK";
            
            $scope.booking_select = "Select your booking method:"
            
            $scope.booking_email = "Email"
            $scope.booking_kakao = "KaKao Talk"
            $scope.booking_wechat = "WeChat"
            $scope.booking_telephone = "Telephone"
            
            $scope.booking_go_back = "Go Back";
            
            // Cat 2 Sub 1
            $scope.c2s1_title = "VIP OVERNIGHT SPA";
            $scope.c2s1_bullet_1 = "Check in after 11pm, Checkout out 11am";
            $scope.c2s1_bullet_2 = "VIP Floor - Rooms";
            $scope.c2s1_bullet_3 = "VIP Lounge - Free Coffee, Tea, Snack";
            $scope.c2s1_bullet_4 = "2 Hours Selections of Massages + Foot Scrub";
            $scope.c2s1_bullet_5 = "Free Shower Facialities";
            $scope.c2s1_bullet_6 = "Free Airport Transfer to Tiya Spa upon Arrival (Min. 2pax)";
            $scope.c2s1_price = "RM298";
            
            // Cat 2 Sub 2
            $scope.c2s2_title = "VIP SPA";
            $scope.c2s2_bullet_1 = "3 Hours";
            $scope.c2s2_bullet_2 = "VIP Floor - Rooms";
            $scope.c2s2_bullet_3 = "VIP Lounge - Free Coffee, Tea, Snack";
            $scope.c2s2_bullet_4 = "2 Hours Selections of Massages + Foot Scrub";
            $scope.c2s2_bullet_5 = "1 hour, resting time in Room";
            $scope.c2s2_bullet_6 = "Free Transport to City Hotels after Spa";
            $scope.c2s2_price = "RM248";
        }
        /* ++++++++++++++++++++++++++++++++
        MANDARIN TEXT
        ++++++++++++++++++++++++++++++++ */
        if($scope.lang == "ch"){
            
            $scope.service_title_extra = 8;
            
            $scope.txt_booking = "预约";
            
            //Changes for txt_booking
            $(".txt_booking").css("left","90px");

            $scope.booking_title = "预约";
            
            $(".d-booking-name").attr("placeholder","名称");
            $(".d-booking-email").attr("placeholder","电子邮件");
            $(".d-booking-description").attr("placeholder","预订说明");
            
            $scope.booking_successful = "成功预订！";
            $scope.booking_new = "新预订";
            
            $scope.booking_word = "预订";
            $scope.service_book_now = "现在预订";
            
            $scope.txt_welcome_message="Tiya Spa＆Reflexology是哥打京那巴鲁的第一家同类产品，为那些寻求正宗亚洲按摩的人提供各种服务。所有治疗师都训练有素的自己的种族饮食，以舒缓人体的压力。";
            
            $scope.txt_discover="发现更多";
            
            $scope.cat_1 = "画廊";
            $scope.cat_2 = "画面";
                $scope.cat_2_sub_1 = "VIP 过夜温泉";
                $scope.cat_2_sub_2 = "VIP 温泉";
                $scope.cat_2_sub_3 = "当地BORNEO HERBAL球+身体按摩";
                $scope.cat_2_sub_4 = "'RANAU'本地热石按摩治疗";
            $scope.cat_3 = "按摩";
            $scope.cat_4 = "产品";
            
            $scope.txt_contact = "联系";
            
            $scope.service_start = "价格从：";
            $scope.service_book_now = "现在预订";

            // Cat 2 Sub 1
            $scope.c2s1_title = "VIP 过夜温泉";
            $scope.c2s1_bullet_1 = "晚上11点后入住，11点结账";
            $scope.c2s1_bullet_2 = "贵宾楼层 - 客房";
            $scope.c2s1_bullet_3 = "贵宾休息室 - 免费咖啡，茶，小吃";
            $scope.c2s1_bullet_4 = "2小时精选按摩+足部磨砂";
            $scope.c2s1_bullet_5 = "免费淋浴面部护理";
            $scope.c2s1_bullet_6 = "抵达时免费机场接送至Tiya Spa（最低2份）";
            $scope.c2s1_price = "RM298";
            
            // Cat 2 Sub 2
            $scope.c2s2_title = "VIP 温泉";
            $scope.c2s2_bullet_1 = "3小时";
            $scope.c2s2_bullet_2 = "贵宾楼层 - 客房";
            $scope.c2s2_bullet_3 = "贵宾休息室 - 免费咖啡，茶，小吃";
            $scope.c2s2_bullet_4 = "2小时精选按摩+足部磨砂";
            $scope.c2s2_bullet_5 = "1小时，在房间休息时间";
            $scope.c2s2_bullet_6 = "水疗后免费送往城市酒店";
            $scope.c2s2_price = "RM248";
            
        }
        /* ++++++++++++++++++++++++++++++++
        KOREAN TEXT
        ++++++++++++++++++++++++++++++++ */
        if($scope.lang == "kor"){
            
            $scope.service_title_extra = 8;
            
            $scope.txt_booking="약속을 잡다";
            
            //Changes for txt_booking
            $(".txt_booking").css("left","77px");
            
            $scope.booking_title = "약속을 잡다";
            
            $(".d-booking-name").attr("placeholder","이름");
            $(".d-booking-email").attr("placeholder","이메일");
            $(".d-booking-description").attr("placeholder","예약 설명");
            
            $scope.booking_successful = "예약 완료!";
            $scope.booking_new = "신규 예약";
            
            $scope.booking_word = "예매";
            
            
            

            
            $scope.txt_welcome_message="티야 스파 & 리플 렉솔 로지 (Tiya Spa & Reflexology)는 코타 키나발루에서 처음으로 진정한 아시아 마사지를 찾는 사람들에게 다양한 것을 제공합니다. 모든 치료사는 스트레스의 인체를 진정시키기 위해 자신의 민족 와트에서 잘 훈련받습니다.";
            
            
            $scope.txt_discover="더 발견하다";
            
            $scope.cat_1 = "갱도";
            $scope.cat_2 = "메뉴";
                $scope.cat_2_sub_1 = "VIP 박 스파";
                $scope.cat_2_sub_2 = "VIP 온천";
                $scope.cat_2_sub_3 = "지방산 보르네오 화 환 + 체내 마사지";
                $scope.cat_2_sub_4 = "'라나 우 (LANAU)'지역 온천탕 마사지 요법";
            $scope.cat_3 = "按摩";
            $scope.cat_4 = "产品";
            $scope.cat_3 = "마사지";
            $scope.cat_4 = "제품";
            
            $scope.txt_contact = "접촉";
            
            $scope.service_start = "출발 가격:";
            $scope.service_book_now = "지금 예약";
            
            // Cat 2 Sub 1
            $scope.c2s1_title = "VIP 오버 나이트 스파";
            $scope.c2s1_bullet_1 = "11시 이후에 체크인, 11시에 체크 아웃";
            $scope.c2s1_bullet_2 = "VIP 층 - 객실";
            $scope.c2s1_bullet_3 = "VIP 라운지 - 무료 커피, 차, 스낵";
            $scope.c2s1_bullet_4 = "마사지 + 발 스크럽 2 시간 선택";
            $scope.c2s1_bullet_5 = "무료 샤워 시설";
            $scope.c2s1_bullet_6 = "Tiya Spa 도착시 무료 공항 교통편 (최소 2 인승)";
            $scope.c2s1_price = "RM298";
            
            // Cat 2 Sub 2
            $scope.c2s2_title = "VIP 온천";
            $scope.c2s2_bullet_1 = "3 시간";
            $scope.c2s2_bullet_2 = "VIP 층 - 객실";
            $scope.c2s2_bullet_3 = "VIP 라운지 - 무료 커피, 차, 스낵";
            $scope.c2s2_bullet_4 = "마사지 + 발 스크럽 2 시간 선택";
            $scope.c2s2_bullet_5 = "1 시간, 방에 휴식 시간";
            $scope.c2s2_bullet_6 = "스파 후 도시 교통편 무료 교통편";
            $scope.c2s2_price = "RM248";
            
        }
        
        // Need fresh function
       // $scope.service_set_up($scope.service_cache);
        
        
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
          
          $('.logo-absolute').animate({opacity: 0}, 1000);
          setTimeout(function(){ 
            $(".logo-absolute").css("display","none");
          
          } , 1000);
          scrolled = true;
      }
    });
    
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop(); 

        // If not at top, scroll the main page upwards.
        if (scroll != 0 && scrolled != true)
        {
          $('.home-area').animate({marginTop: "-"+$(window).height().toString()+"px"},1500);
        
          $('.logo-absolute').animate({opacity: 0}, 1000);
          setTimeout(function(){ 
            $(".logo-absolute").css("display","none");
          
          } , 1000);
            
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
				$('.home-category-con').find("p").css("color","white");

				// Highlight selected menu
        $(this).find("div").css("left", "-130px");
        $(this).find("p").css("margin-left", "-35%");
				$(this).find("p").css("margin-right", "35%");
        $(this).find("p").css("color", "black");

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
        $('.home-category-links').css("color","white");

        // Set current link
        $(this).css("text-decoration","underline");
        $(this).css("color"," #FACF69");

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

    $('.link-c-2-s-1').click(function(){
    
       if(current_section != '.sec-c-2-s-1')
       {
           transition_section(".sec-c-2-s-1"); 
       }
      
        
    })
        
    $('.link-c-2-s-2').click(function(){
    
       if(current_section != '.sec-c-2-s-2')
       {
           transition_section(".sec-c-2-s-2"); 
       }
      
        
    })
        
    $('.link-gallery').click(function(){
       
        if(current_section != '.section-gallery')
        {
            transition_section(".section-gallery");
        }
        
    })
        
      $('.link-map').click(function(){
       
        if(current_section != '.section-map')
        {
            transition_section(".section-map");
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
    

        function isEmail(email) {
          var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          return regex.test(email);
        }
        
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
        
        $scope.enter_booking_email = function() {
            $(".booking-selection").css("display","none");
            
            
            $(".booking-section-email").css("display","unset");
            
            
            $(".booking-section-email").animate({opacity: 1, marginTop: "0px"},500);
            
            
        }
        
         $scope.enter_m_booking_email = function() {
            $(".m-booking-selection").css("display","none");
            
            
            $(".m-booking-email").css("display","unset");
            
            
            $(".m-booking-email").animate({opacity: 1, marginTop: "0px"},500);
            
            
        }
        
        $scope.enter_booking_telephone = function() {
            $(".booking-selection").css("display","none");
            
            
            $(".booking-section-telephone").css("display","unset");
            
            $(".booking-section-telephone").animate({opacity: 1, marginTop: "0px"},600);
            
        }
        
        $scope.enter_m_booking_telephone = function() {
            $(".m-booking-selection").css("display","none");
            
            
            $(".m-booking-telephone").css("display","unset");
            
            
            $(".m-booking-telephone").animate({opacity: 1, marginTop: "0px"},500);
            
            
        }
        
        $scope.enter_booking_kakao = function() {
            $(".booking-selection").css("display","none");
            
            
            $(".booking-section-kakao").css("display","unset");
            
            $(".booking-section-kakao").animate({opacity: 1, marginTop: "0px"},600);
            
        }
        
        $scope.enter_m_booking_kakao = function() {
            $(".m-booking-selection").css("display","none");
            
            
            $(".m-booking-kakao").css("display","unset");
            
            
            $(".m-booking-kakao").animate({opacity: 1, marginTop: "0px"},500);
            
            
        }
        
        $scope.enter_booking_wechat= function() {
            $(".booking-selection").css("display","none");
            
            
            $(".booking-section-wechat").css("display","unset");
            
            $(".booking-section-wechat").animate({opacity: 1, marginTop: "0px"},600);
            
        }
        
        $scope.enter_m_booking_wechat = function() {
            $(".m-booking-selection").css("display","none");
            
            
            $(".m-booking-wechat").css("display","unset");
            
            
            $(".m-booking-wechat").animate({opacity: 1, marginTop: "0px"},500);
            
            
        }
        
        $(".booking-go-back").click(function(){
     
            $(".booking-section-email").css("display","none");
            $(".booking-section-kakao").css("display","none");
            $(".booking-section-telephone").css("display","none");
            $(".booking-section-wechat").css("display","none");
            
            $(".booking-selection").css("display","unset");
        });
        
        $(".m-booking-go-back").click(function(){
     
            $(".m-booking-email").css("display","none");
            $(".m-booking-kakao").css("display","none");
            $(".m-booking-telephone").css("display","none");
            $(".m-booking-wechat").css("display","none");
            
            $(".m-booking-selection").css("display","unset");
        });

            
            
        
        $scope.new_booking = () => {
            $(".booking-input").css("display","unset");
            $(".booking-button").css("display","block");
            $(".booking-title").css("display","block");
            
            $(".booking-button-text").css("display","block");
            $(".lds-ring").css("display","none");
                  
                $(".booking-checked").css("margin-top","90px");
                $(".booking-checked").css("opacity",0);
                $(".booking-successful").css("opacity",0);
                $(".booking-new-booking").css("opacity",0);

        }
        
        $scope.email_valid = false;
        
		$scope.submit_booking = ()=>
		{
            // Get content of booking
            email_body = $(".d-booking-description").val();
            email_target = $(".d-booking-email").val();
            email_name = $(".d-booking-name").val();
            
            var variables = {name: email_name, details: email_body, target: email_target}
            
            if(isEmail(email_target))
            {
                $scope.email_valid = true;
            }
            
            if($scope.email_valid)
            {  

                $(".booking-button-text").css("display","none");
                $(".lds-ring").css("display","block");

                emailjs.send('gmail', 'tiya', variables)
                .then(function(response) {
                   $(".booking-input").css("display","none");
                   $(".booking-button").css("display","none");
                   $(".booking-title").css("display","none");

                    $(".booking-checked").animate({marginTop: "80px", opacity: 1}, 500);
                    $(".booking-successful").animate({opacity: 1},500);
                    $(".booking-new_booking").css("display","unset");
                    $(".booking-new-booking").animate({opacity: 1}, 500);
                }, function(error) {
                   console.log('FAILED...', error);
                });
            } else {
                alert("invalid email");
            }
            /*
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "ernestsoo22@gmail.com",
                Password : "8cee3215-e693-46c5-90ac-59b508a8bfdc",
                To : email_target.toString(),
                From : "ernestsoo22@gmail.com",
                Subject: "Sucessful Booking!",
                Body: '<!DOCTYPE html PUBLIC " -//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"> <head> <title> </title> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <meta name="viewport" content="width=device-width"> <style type="text/css">body, html { margin: 0px; padding: 0px; -webkit-font-smoothing: antialiased; text-size-adjust: none; width: 100% !important; } table td, table { } #outlook a { padding: 0px; } .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; } .ExternalClass { width: 100%; } @media only screen and (max-width: 480px) { table, table tr td, table td { width: 100% !important; } img { width: inherit; } .layer_2 { max-width: 100% !important; } .edsocialfollowcontainer table { max-width: 25% !important; } .edsocialfollowcontainer table td { padding: 10px !important; } .edsocialfollowcontainer table { max-width: 25% !important; } .edsocialfollowcontainer table td { padding: 10px !important; } } </style> </head> <body style="padding:0; margin: 0;"> <table style="height: 100%; width: 100%; background-color: #efefef;" align="center"> <tbody> <tr> <td valign="top" id="dbody" data-version="2.31" style="width: 100%; height: 100%; padding-top: 30px; padding-bottom: 30px; background-color: #efefef;"> <!--[if (gte mso 9)|(IE)]><table align="center" style="max-width:600px" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--> <table class="layer_1" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; box-sizing: border-box; width: 100%; margin: 0px auto;"> <tbody> <tr> <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;"> <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--> <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"> <table class="edcontent" style="border-collapse: collapse;width:100%" border="0" cellpadding="0" cellspacing="0"> <tbody> <tr> <td class="edimg" valign="top" style="padding: 0px; box-sizing: border-box; text-align: center;"> <img style="border-width: 0px; border-style: none; max-width: 600px; width: 100%;" width="600" alt="Image" src="https://api.elasticemail.com/userfile/0eeea5f4-4373-4534-97e2-f46c914ce9a4/Tiya_Logo.png"> </td> </tr> </tbody> </table> </div> <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--> </td> </tr> <tr> <td class="drow" valign="top" align="center" style="background-color: #e52c4c; box-sizing: border-box; font-size: 0px; text-align: center;"> <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--> <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"> <table class="edcontent" style="border-collapse: collapse;width:100%;" border="0" cellpadding="0" cellspacing="0"> <tbody> <tr> <td class="edtext" valign="top" style="padding: 20px; text-align: left; color: #5f5f5f; font-size: 12px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"> <p class="style2 text-center" style="text-align: center; margin: 0px; padding: 0px; color: #ffffff; font-size: 32px; font-family: Helvetica, Arial, sans-serif;">Thank you for your Booking! <br> </p> <p style="margin: 0px; padding: 0px;"> <span style="color: #ffffff;"> <br>Your Booking has been successfully submitted to Tiya Spa and you should be expecting a response soon within 24 hours. </span> </p> </td> </tr> </tbody> </table> </div> <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--> </td> </tr> <tr> <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;"> <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--> <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"> <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%"> <tbody> <tr> <td valign="top" class="edtext" style="padding: 20px; text-align: left; color: #5f5f5f; font-size: 12px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"> <p style="margin: 0px; padding: 0px;">Here is your Booking Summary: </p> </td> </tr> </tbody> </table> </div> <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--> </td> </tr> <tr> <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;"> <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--> <div class="layer_2" style="display: inline-block; vertical-align: top; width: 100%; max-width: 600px;"> <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%"> <tbody> <tr> <td valign="top" class="edtext" style="padding: 20px; text-align: left; color: #5f5f5f; font-size: 12px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"> <p style="margin: 0px; padding: 0px;"> <strong>Customer Name: </strong> '+email_name+' </p> <p style="margin: 0px; padding: 0px;"> <br> </p> <p style="margin: 0px; padding: 0px;"> <strong>Booking Description: </strong> '+email_body+' </p> </td> </tr> </tbody> </table> </div> <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--> </td> </tr> <tr> <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;"> <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--> <div class="layer_2" style="display: inline-block; vertical-align: top; width: 100%; max-width: 600px;"> <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%"> <tbody> <tr> <td valign="top" class="edtext" style="padding: 20px; text-align: left; color: #5f5f5f; font-size: 12px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"> <p style="margin: 0px; padding: 0px;"> <br> </p> <p style="margin: 0px; padding: 0px;"> <br> </p> </td> </tr> </tbody> </table> </div> <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--> </td> </tr> <tr> <td class="drow" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0px; text-align: center;"> <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--> <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"> <table class="edcontent" style="border-collapse: collapse;width:100%" border="0" cellpadding="0" cellspacing="0"> <tbody> <tr> <td class="edtext" valign="top" style="padding: 10px; text-align: left; color: #5f5f5f; font-size: 12px; font-family: Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"> <p style="text-align: center; font-size: 11px; margin: 0px; padding: 0px;">If you no longer wish to receive mail from us, you can <a href="{unsubscribe}" style="background-color: initial; color: #828282; font-size: 12px; font-family: Helvetica, Arial, sans-serif; text-decoration: none;">unsubscribe</a> <br>{accountaddress} </p> </td> </tr> </tbody> </table> </div> <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--> </td> </tr> </tbody> </table> <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--> </td> </tr> </tbody> </table> </body></html>'
            }).then(
              message => {
                  
                  
              console.log(message)
              
              if(message == "OK")
              {
                $(".booking-input").css("display","none");
                $(".booking-button").css("display","none");
                $(".booking-title").css("display","none");
                  
                $(".booking-checked").animate({marginTop: "80px", opacity: 1}, 500);
                $(".booking-successful").animate({opacity: 1},500);
                $(".booking-new-booking").animate({opacity: 1}, 500);
              } else {
                alert("fail");
              }
                         
                         
            }
          
            );
            
            */
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
            
            // Center Scan 
            var scan_left = ($(window).width() - $(".scan-id").width()) / 2;
		   //   booking_img_left = booking_img_left - 72;
	       $(".scan-id").css("margin-left",scan_left.toString()+"px");

            // Center Booking Cancel Icon
            var booking_cancel_left = ($(window).width() - $(".booking-cancel").width()) / 2;
            booking_cancel_left = booking_cancel_left -10;
            $(".booking-cancel").css("margin-left",booking_cancel_left.toString()+"px");
            
            // Center Booking Checked Icon
            var booking_checked_left = ($(window).width() - $(".booking-checked").width()) / 2;
            booking_checked_left = booking_checked_left -10;
            $(".booking-checked").css("margin-left",booking_checked_left.toString()+"px");

            var booking_left = ($(window).width() - $(".booking-input-desktop-measure").width()) / 2;


            booking_left = booking_left - 20;

            $(".booking-input").css("margin-left",booking_left.toString()+"px");

            $(".d-booking-description").focus(function(){
                    $(this).animate({height:180,borderRadius:32},750);
                
                    if($scope.lang == "eng")
                    {
                        $(this).attr("placeholder","Enter a list of services you wish from Tiya and the date you want to drop by. You will receive an email from Tiya upon confirming your booking");
                    } else if ($scope.lang == "ch") {
                        $(this).attr("placeholder","输入您希望从Tiya获得的服务列表以及您要删除的日期。您将在确认预订后收到Tiya发送的电子邮件");
                        
                    } else if ($scope.lang == "kor") {
                        $(this).attr("placeholder","Tiya에서 원하는 서비스 목록과 삭제할 날짜를 입력하십시오. 예약 확인시 Tiya 이메일을 보내드립니다.");
                        
                    }
                    
            });
        });

		// Center Booking Logo
		var booking_img_left = ($(window).width() - $(".booking-img").width()) / 2;
		booking_img_left = booking_img_left - 72;
	  $(".booking-img").css("margin-left",booking_img_left.toString()+"px");
        
          // Center Scan 
            var scan_left = ($(window).width() - $(".scan-id").width()) / 2;
		   //   booking_img_left = booking_img_left - 72;
	       $(".scan-id").css("margin-left",scan_left.toString()+"px");


		// Center Booking Cancel Icon
		var booking_cancel_left = ($(window).width() - $(".booking-cancel").width()) / 2;
		booking_cancel_left = booking_cancel_left -10;
		$(".booking-cancel").css("margin-left",booking_cancel_left.toString()+"px");
        
        // Center Booking Checked Icon
        var booking_checked_left = ($(window).width() - $(".booking-checked").width()) / 2;
        booking_checked_left = booking_checked_left;
        $(".booking-checked").css("margin-left",booking_checked_left.toString()+"px");

		var booking_left = ($(window).width() - $(".booking-input-desktop-measure").width()) / 2;


		booking_left = booking_left - 20;

		$(".booking-input").css("margin-left",booking_left.toString()+"px");

		$(".d-booking-description").focus(function(){
                    $(this).animate({height:180,borderRadius:32},750);
                
                    if($scope.lang == "eng")
                    {
                        $(this).attr("placeholder","Enter a list of services you wish from Tiya and the date you want to drop by. You will receive an email from Tiya upon confirming your booking");
                    } else if ($scope.lang == "ch") {
                        $(this).attr("placeholder","输入您希望从Tiya获得的服务列表以及您要删除的日期。您将在确认预订后收到Tiya发送的电子邮件");
                        
                    } else if ($scope.lang == "kor") {
                        $(this).attr("placeholder","Tiya에서 원하는 서비스 목록과 삭제할 날짜를 입력하십시오. 예약 확인시 Tiya 이메일을 보내드립니다.");
                    }
		});
        
    /* #########################################################################
    ############################################################################
    BOOKING SECTION
    
    ############################################################################
    ##########################################################################*/
    
    var map_height = $(window).height() * 0.8;
        $("#d-map").css("height", map_height+"px");
        
    $(window).resize(function(){ 
        var map_height = $(window).height() * 0.8;
        $("#d-map").css("height", map_height+"px");
    });
        
        
    $('.jumbotron').paroller();
    
 
    
});