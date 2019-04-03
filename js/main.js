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
    
 
    $(document).ready(function() {
       setTimeout(function(){
           $('.preloader').fadeOut('slow');
       }, 1500);
       
    });
        
    var lds_top = $(window).height() - $(".preloader-ripple").height();
        
    lds_top = lds_top / 2;
        
    $(".preloader-ripple").css("margin-top", lds_top.toString() + "px");
    
        
    var lds_left = $(window).width() - $(".preloader-ripple").width();
        
    lds_left = lds_left / 2;
        
    $(".preloader-ripple").css("margin-left", lds_left.toString() + "px");
        
    $(".lds-ripple").css("display","inline-block");
  
    setTimeout(function(){
        $(".preloader").fadeOut("slow");
    },5000)


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
            
            if(!$scope.hamburger)
            {
                $(".hamburger-shadow").css("margin-left","-"+ shadow_width.toString() + "px");
            }

            
            
            if($(".hamburger-shadow").height() > $(window).height())
            {
                $(".mobile-content").css("min-height", $(".hamburger-shadow").height().toString() + "px");
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

 //   setTimeout(function(){

        //$('.welcome-area').css("background","la(255, 248, 249, 0)");
        $('.welcome-area').css("background","rgba(189, 195, 199, 0.00)");


     //   setTimeout(function(){
           $('.glyphicon-home-more').fadeTo(0,1.0);
           $('.glyphicon-home-more').animate({marginTop: "15px"}, 1000);
           $('.welcome-discover').fadeTo(0,1.0);
     //   },1250);

        //$('.lds-ripple').css("display","none");

        $('.welcome-logo').css("display","none")
       // $('.welcome-text').fadeTo(1250,1.0);

        // Make Nav Bar appear
        $('.nav-bar').css("visibility","visible");


        // Set height to user's window height.
        //$('.home-area').css("height",$(window).height().toString() + "px");

   // },1250);
        
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
            $scope.m_txt_booking = "MAKE A BOOKING";
            
            //Changes for txt_booking
            $(".txt_booking").css("left","42px");
            
            $scope.booking_title = "BOOK AN APPOINTMENT";
            
            $(".d-booking-name").attr("placeholder","Name");
            $(".d-booking-email").attr("placeholder","Email");
            $(".d-booking-description").attr("placeholder","Description");
            
            $(".booking-name").attr("placeholder","Name");
            $(".booking-email").attr("placeholder","Email");
            $(".booking-description").attr("placeholder","Description");
            
            $scope.booking_successful = "Successful Booking！";
            $scope.booking_new = "NEW BOOKING";
            $scope.language = "LANGUAGE";
            $scope.gallery = "GALLERY";
            
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
            
            $scope.txt_contact = "CONTACT US";
            
            $scope.service_start = "Price Starting from:";
            $scope.service_book_now = "BOOK NOW";
            
            $scope.booking_word = "BOOK";
            
            $scope.booking_select = "Select your booking method:"
            
            $scope.booking_email = "Email"
            $scope.booking_kakao = "KaKao Talk"
            $scope.booking_wechat = "WeChat"
            $scope.booking_telephone = "Telephone"
            
            $scope.booking_go_back = "Go Back";
            
            $scope.booking_scan = "Please Scan:";
            $scope.booking_call = "Please Call:";
            $scope.booking_enquiries = "For Booking Enquiries";
            
            // Cat 2 Sub 1: VIP OVERNIGHT SPA
            $scope.c2s1_title = "VIP Overnight Spa";
            $scope.c2s1_bullet_1 = "Check in after 11pm, Checkout out 11am";
            $scope.c2s1_bullet_2 = "VIP Floor - Rooms";
            $scope.c2s1_bullet_3 = "VIP Lounge - Free Coffee, Tea, Snack";
            $scope.c2s1_bullet_4 = "2 Hours Selections of Massages + Foot Scrub";
            $scope.c2s1_bullet_5 = "Free Shower Facialities";
            $scope.c2s1_bullet_6 = "Free Airport Transfer to Tiya Spa upon Arrival (Min. 2pax)";
            $scope.c2s1_price = "RM298";
            
            // Cat 2 Sub 2: Local Borneo Herball Ball + Body Massage;
            $scope.c2s2_title = "Local Borneo Herbal Ball + Body Massage";
            $scope.c2s2_bullet_1 = "Relaxing";
            $scope.c2s2_bullet_2 = "Improve blood circulation";
            $scope.c2s2_bullet_3 = "Release muscle & joint pain";
            $scope.c2s2_price = "RM168";
            
            // Cat 2 Sub 3: "Ranau" 
            $scope.c2s3_title = "“RANAU” Hot Stone Massage Therapy";
            $scope.c2s3_bullet_1 = "Relieve stress";
            $scope.c2s3_bullet_2 = "Improve Metabolic Rate";
            $scope.c2s3_bullet_3 = "Reduce water retention";
            $scope.c2s3_price = "RM168";
            
            
            // Cat 2 Sub 4: Cocao butter body scrub.
            $scope.c2s4_title = "COCOA  BUTTER BODY SCRUB + Shower + Body & Foot Massage";
            $scope.c2s4_bullet_1 = "Aroma Oil Massage";
            $scope.c2s4_bullet_2 = "Traditional “Lomi Lomi” Massage";
            $scope.c2s4_bullet_3 = "Malay Traditional “Tari Tari” Pressure Point Massage";
            $scope.c2s4_bullet_4 = "Traditional Thai Massage";
            $scope.c2s4_price = "RM168";
            
            // Cat 2 Sub 5: Urut-urut
            $scope.c2s5_title = "Local Traditional “URUT-URUT” Lymphatic Detox Massage";
            $scope.c2s5_bullet_1 = "Improve Immune System";
            $scope.c2s5_bullet_2 = "Relaxing";
            $scope.c2s5_bullet_3 = "Detox";
            $scope.c2s5_bullet_4 = "Calming";
            $scope.c2s5_price = "RM138";
            
            // Cat 2 Sub 6: Tari-tari
            $scope.c2s6_title = "Malay Traditional “TARI-TARI” Pressure Point Massage";
            $scope.c2s6_bullet_1 = "Reduces pain & muscle spasms";
            $scope.c2s6_bullet_2 = "Acupressure";
            $scope.c2s6_price = "RM128";
            
            // Cat 2 Sub 7: Aroma Oil
            $scope.c2s7_title = "Aroma Oil Massage";
            $scope.c2s7_price = "RM98";
            
            // Cat 2 Sub 8: Thai Massage
            $scope.c2s8_title = "Traditional Thai Massage";
            $scope.c2s8_price = "RM98";
            
            // Cat 2 Sub 9: Tiya "Sunburn"
            $scope.c2s9_title = "‘Tiya’ Sunburn Treatment + Body & Foot Massage ";
            $scope.c2s9_bullet_1 = "Aloe vera contains 150 vitamins";
            $scope.c2s9_bullet_2 = "Relieve pain and inflammation";
            $scope.c2s9_bullet_3 = "Help repair damaged skin cells";
            $scope.c2s9_price = "RM188";
            
            // Cat 2 Sub 10: Kids Spa
            $scope.c2s10_title = "Kid's Spa";
            $scope.c2s10_bullet_1 = "Apply for Children age below 12 years old";
            $scope.c2s10_bullet_2 = "Must identify with Passport or Any other Formal Identity Materials";
            $scope.c2s10_price = "RM92";
            
            // Cat 2 Sub 11: Lomi-lomi
            $scope.c2s11_title = "Traditional “LOMI-LOMI” Massage";
            $scope.c2s11_bullet_1 = " Deep tissue massage using elbow movement";
            $scope.c2s11_price = "RM138";
        }
        /* ++++++++++++++++++++++++++++++++
        MANDARIN TEXT
        ++++++++++++++++++++++++++++++++ */
        if($scope.lang == "ch"){
            
            $scope.service_title_extra = 8;
            
            $scope.txt_booking = "预约";
            $scope.m_txt_booking = "预约";
            
            //Changes for txt_booking
            $(".txt_booking").css("left","90px");

            $scope.booking_title = "预约";
            
            $scope.language = "语言";
            $scope.gallery = "画廊";
            
            $(".d-booking-name").attr("placeholder","姓名");
            $(".d-booking-email").attr("placeholder","电子邮箱");
            $(".d-booking-description").attr("placeholder","预订说明");
            
            $(".booking-name").attr("placeholder","姓名");
            $(".booking-email").attr("placeholder","电子邮箱");
            $(".booking-description").attr("placeholder","预订说明");
            
            $scope.booking_successful = "成功预订！";
            $scope.booking_new = "新预订";
            
            $scope.booking_word = "预订";
            $scope.service_book_now = "现在预订";
            
            $scope.booking_select = "请选择你的预约方式:";
            
            $scope.booking_scan = "请扫描:";
            $scope.booking_call = "请打:";
            $scope.booking_enquiries = "询问预约详情";
            
            $scope.txt_discover="更多资讯";
            
            $scope.cat_1 = "短片廊";
            $scope.cat_2 = "服务项目";
                $scope.cat_2_sub_1 = "VIP 过夜温泉";
                $scope.cat_2_sub_2 = "VIP 温泉";
                $scope.cat_2_sub_3 = "当地BORNEO HERBAL球+身体按摩";
                $scope.cat_2_sub_4 = "'RANAU'本地热石按摩治疗";
            $scope.cat_3 = "店铺位置";
            $scope.txt_contact = "联系方式";
            
            $scope.service_start = "价格从：";
            $scope.service_book_now = "现在预订";

            // Cat 2 Sub 1 : VIP Overnight Spa
            $scope.c2s1_title = "VIP 逍遥夜专享";
            $scope.c2s1_bullet_1 = "晚上11点后入住 ,早上11点退房";
            $scope.c2s1_bullet_2 = "享有贵宾房";
            $scope.c2s1_bullet_3 = "享有贵宾休息室享用免费咖啡，茶和小吃";
            $scope.c2s1_bullet_4 = "享有2个小时的按摩 + 足部磨砂 (配套任选其一)";
            $scope.c2s1_bullet_5 = "享有沐浴设施";
            $scope.c2s1_bullet_6 = "享有免费机场接机 (2人以上方可享用)";
            $scope.c2s1_price = "RM298";
            
            // Cat 2 Sub 2: Local Borneo Herball Ball + Body Massage;
            $scope.c2s2_title = "婆罗洲传统草药理疗按摩";
            $scope.c2s2_bullet_1 = "舒缓减压";
            $scope.c2s2_bullet_2 = "促进血液循环";
            $scope.c2s2_bullet_3 = "减轻肌肉疼痛";
            $scope.c2s2_price = "RM168";
            
            // Cat 2 Sub 3: "Ranau"
            $scope.c2s3_title = "“拉瑙”本地传统热石按摩护理";
            $scope.c2s3_bullet_1 = "消除疲劳";
            $scope.c2s3_bullet_2 = "提高代谢";
            $scope.c2s3_bullet_3 = "消除水肿";
            $scope.c2s3_price = "RM168";
            
            // Cat 2 Sub 4: Cocao butter body scrub.
            $scope.c2s4_title = "可可油磨砂护理 + 淋浴 + 全身与沐足";
            $scope.c2s4_bullet_1 = "精油按摩";
            $scope.c2s4_bullet_2 = "传统“喽咪喽咪”推油按摩";
            $scope.c2s4_bullet_3 = "马来传统“达厘达厘”指压按摩";
            $scope.c2s4_bullet_4 = "传统泰式按摩";
            $scope.c2s4_price = "RM168";
            
            // Cat 2 Sub 5: Urut-urut
            $scope.c2s5_title = "本地传统“乌噜-乌噜”淋巴排毒按摩";
            $scope.c2s5_bullet_1 = "改善免疫系统";
            $scope.c2s5_bullet_2 = "舒缓减压";
            $scope.c2s5_bullet_3 = "排毒驱风";
            $scope.c2s5_bullet_4 = "改善情绪紧张，忧郁";
            $scope.c2s5_price = "RM138";
            
            // Cat 2 Sub 6: Tari-tari
            $scope.c2s6_title = "马来传统‘达厘达厘’指压按摩";
            $scope.c2s6_bullet_1 = "疏通经络";
            $scope.c2s6_bullet_2 = "穴位指压";
            $scope.c2s6_price = "RM128";
            
            // Cat 2 Sub 7: Aroma Oil
            $scope.c2s7_title = "精油按摩";
            
            // Cat 2 Sub 8: Thai Massage
            $scope.c2s8_title = "传统泰式按摩";
            $scope.c2s8_price = "RM98";
            
             // Cat 2 Sub 9: Tiya "Sunburn"
            $scope.c2s9_title = "‘梃雅’ 专属晒伤护理 + 按摩 + 沐足";
            $scope.c2s9_bullet_1 = "芦荟含有150 种维生素";
            $scope.c2s9_bullet_2 = "缓解疼痛和炎症";
            $scope.c2s9_bullet_3 = "帮助修复受损的皮肤细胞";
            $scope.c2s9_price = "RM188";
            
            // Cat 2 Sub 10: Kids Spa
            $scope.c2s10_title = "儿童水疗";
            $scope.c2s10_bullet_1 = "12岁以下的儿童方可申请";
            $scope.c2s10_bullet_2 = "必须出示护照或任何其他身份资料";
            $scope.c2s10_price = "RM92";
            
            // Cat 2 Sub 11: Lomi-lomi
            $scope.c2s11_title ="传统 “喽咪-喽咪” 推油按摩";
            $scope.c2s11_bullet_1 = "手肘深沉组织按摩";
            $scope.c2s11_price = "RM138";
        }
        /* ++++++++++++++++++++++++++++++++
        KOREAN TEXT
        ++++++++++++++++++++++++++++++++ */
        if($scope.lang == "kor"){
            
            $scope.service_title_extra = 8;
            
            $scope.txt_booking="예약한다";
            $scope.m_txt_booking="약속을 잡다";
            
            //Changes for txt_booking
            $(".txt_booking").css("left","77px");
            
            $scope.booking_title = "약속을 잡다";
            
            $scope.language = "언어";
            $scope.gallery = "갱도";
            
            $(".d-booking-name").attr("placeholder","이름");
            $(".d-booking-email").attr("placeholder","메일주소");
            $(".d-booking-description").attr("placeholder","예약설명서");
            
            $(".booking-name").attr("placeholder","이름");
            $(".booking-email").attr("placeholder","메일주소");
            $(".booking-description").attr("placeholder","예약설명서");
            
            $scope.booking_successful = "예약 완료!";
            $scope.booking_new = "신규 예약";
            
            $scope.booking_word = "예매";
            
            
            $scope.booking_select = "예약방법 선택:";

            
            $scope.txt_welcome_message="티야 스파 & 리플 렉솔 로지 (Tiya Spa & Reflexology)는 코타 키나발루에서 처음으로 진정한 아시아 마사지를 찾는 사람들에게 다양한 것을 제공합니다. 모든 치료사는 스트레스의 인체를 진정시키기 위해 자신의 민족 와트에서 잘 훈련받습니다.";
            
            
            $scope.txt_discover="더 발견하다";
            
            $scope.cat_1 = "갤러리";
            $scope.cat_2 = "메뉴";
                $scope.cat_2_sub_1 = "VIP 박 스파";
                $scope.cat_2_sub_2 = "VIP 온천";
                $scope.cat_2_sub_3 = "지방산 보르네오 화 환 + 체내 마사지";
                $scope.cat_2_sub_4 = "'라나 우 (LANAU)'지역 온천탕 마사지 요법";
            $scope.cat_3 = "주소";
          
            
            $scope.txt_contact = "연락하기";
            
            $scope.service_start = "시작가격:";
            $scope.service_book_now = "지금 예약";
            
            // Cat 2 Sub 1
            $scope.c2s1_title = "VIP 심야 스파";
            $scope.c2s1_bullet_1 = "오후 11시 이후 체크인, 오전 11시 체크아웃";
            $scope.c2s1_bullet_2 = "VIP 전용층 및 룸";
            $scope.c2s1_bullet_3 = "VIP 라운지에서 무료 커피, 차, 스낵 제공";
            $scope.c2s1_bullet_4 = "마사지 + 풋 스크럽 2시간 선택";
            $scope.c2s1_bullet_5 = "무료 샤워 시설";
            $scope.c2s1_bullet_6 = "공항 무료 픽업 (최소 2명이상)";
            $scope.c2s1_price = "RM298";
            
            // Cat 2 Sub 2: Local Borneo Herball Ball + Body Massage;
            $scope.c2s2_title = "보르네오 원주민 허브 볼 + 바디 마사지";
            $scope.c2s2_bullet_1 = "편안한";
            $scope.c2s2_bullet_2 = "혈액 순환 개선";
            $scope.c2s2_bullet_3 = "근육 및 관절 통증 완화";
            $scope.c2s2_price = "RM168";
            
            // Cat 2 Sub 3: "Ranau"
            $scope.c2s3_title = "'라나우 지역' 온천 돌 마사지 테라피";
            $scope.c2s3_bullet_1 = "스트레스 해소";
            $scope.c2s3_bullet_2 = "率혈액 순환 개선";
            $scope.c2s3_bullet_3 = "수분 보유력 감소 ";
            $scope.c2s3_price = "RM168";
            
            // Cat 2 Sub 4: Cocao butter body scrub.
            $scope.c2s4_title = "코코아 버터 바디 스크럽 + 샤워+ 몸,발 마사지";
            $scope.c2s4_bullet_1 = "아로마 오일 마사지";
            $scope.c2s4_bullet_2 = "발리 섬 사람 Lomi-Lomi 마사지";
            $scope.c2s4_bullet_3 = "무슬림 전통 “타리타리” 혈자리 마사지";
            $scope.c2s4_bullet_4 = "타이 전통 마사지";
            $scope.c2s4_price = "RM168";
            
            // Cat 2 Sub 5: Urut-urut
            $scope.c2s5_title = "원주민 '우룻우룻' 임파선 디톡스 마사지";
            $scope.c2s5_bullet_1 = "면역력 증대";
            $scope.c2s5_bullet_2 = "피로완화";
            $scope.c2s5_bullet_3 = "디톡스";
            $scope.c2s5_bullet_4 = "진정 효과";
            $scope.c2s5_price = "RM138";
            
            // Cat 2 Sub 6: Tari-tari
            $scope.c2s6_title = "말레이 전통 '타리타리' 혈자리 마사지";
            $scope.c2s6_bullet_1 = "통증, 근육통완화";
            $scope.c2s6_bullet_2 = "지압 효과";
            $scope.c2s6_price = "RM128";
            
            // Cat 2 Sub 7: Aroma Oil
            $scope.c2s7_title = "아로마 테라피 마사지";
            
            // Cat 2 Sub 8: Thai Massage
            $scope.c2s8_title = "태국 전통 마사지";
            $scope.c2s8_price = "RM98";
            
            // Cat 2 Sub 9: Tiya "Sunburn"
            $scope.c2s9_title = "‘티야’ 썬텐 화상 케어 + 몸 &발 마사지";
            $scope.c2s9_bullet_1 = "150여종의 비타민을 함유한 알로에";
            $scope.c2s9_bullet_2 = "화상 통증 완화 및 염증 예방";
            $scope.c2s9_bullet_3 = "피부재생 도움";
            $scope.c2s9_price = "RM188";
            
            // Cat 2 Sub 10: Kids Spa
            $scope.c2s10_title = "어린이 스파";
            $scope.c2s10_bullet_1 = "12세 미만 아동에 한함";
            $scope.c2s10_bullet_2 = "여권 또는 나이를 증빙할만한 신분증을 제시 필";
            $scope.c2s10_price = "RM92";
            
            // Cat 2 Sub 11: Lomi-lomi
            $scope.c2s11_title ="발리 섬 사람 Lomi-Lomi 마사지";
            $scope.c2s11_bullet_1 = "팔꿈치 운동을 이용한 깊은 티슈 마사지";
            $scope.c2s11_price = "RM138";
            
            $scope.booking_call = "연락주세요:";
            $scope.booking_scan = "스캔해주세요:";
            $scope.booking_enquiries = "예약 시 질문사항";
            
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
          $('.social-media-group').animate({opacity: 0}, 1000);
          setTimeout(function(){ 
            $(".logo-absolute").css("display","none");
            $(".social-media-group").css("display","none");
            $("#services-video").css("display","unset");
          } , 1000);
          
          scrolled = true;
      }
    });
    function openInNewTab(href) {
      Object.assign(document.createElement('a'), {
        target: '_blank',
        href,
      }).click();
    }
    
    
    $(".social-icon-fb").click(function(){
        openInNewTab("https://www.facebook.com/tiyaspa/");
    })
    $(".social-icon-insta").click(function(){
        openInNewTab("https://www.instagram.com/tiyaspa/");
    })
    $(".social-icon-trip").click(function(){
        openInNewTab("https://www.tripadvisor.com.my/Attraction_Review-g298307-d10441150-Reviews-Tiya_Spa_Reflexology-Kota_Kinabalu_Kota_Kinabalu_District_West_Coast_Division_Sa.html");
    })
    $(".social-icon-meituan").click(function(){
        openInNewTab("http://i.meituan.com/poi/151861483");
    })
        
    $(window).resize(function(){
        
 
        
         $('.logo-absolute').animate({opacity: 0}, 1000);
          $('.social-media-group').animate({opacity: 0}, 1000);
          setTimeout(function(){ 
            $(".logo-absolute").css("display","none");
            $(".social-media-group").css("display","none"); 
            $("#services-video").css("display","unset");
          } , 1000);
    })
       
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop(); 

        // If not at top, scroll the main page upwards.
        if (scroll != 0 && scrolled != true)
        {
          $('.home-area').animate({marginTop: "-"+$(window).height().toString()+"px"},1500);
        
         
           $("#services-video").css("display","unset");   
          $('.logo-absolute').animate({opacity: 0}, 1000);
          $('.social-media-group').animate({opacity: 0}, 1000);
          setTimeout(function(){ 
            $(".logo-absolute").css("display","none");
            $(".social-media-group").css("display","none");
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
        
    $('.link-c-2-s-3').click(function(){
    
       if(current_section != '.sec-c-2-s-3')
       {
           transition_section(".sec-c-2-s-3"); 
       }
      
        
    })
        
    $('.link-c-2-s-4').click(function(){
    
       if(current_section != '.sec-c-2-s-4')
       {
           transition_section(".sec-c-2-s-4"); 
       }
      
        
    })
    
    $('.link-c-2-s-5').click(function(){
    
       if(current_section != '.sec-c-2-s-5')
       {
           transition_section(".sec-c-2-s-5"); 
       }
      
        
    })
        
    $('.link-c-2-s-6').click(function(){
    
       if(current_section != '.sec-c-2-s-6')
       {
           transition_section(".sec-c-2-s-6"); 
       }
      
        
    })
    $('.link-c-2-s-7').click(function(){
    
       if(current_section != '.sec-c-2-s-7')
       {
           transition_section(".sec-c-2-s-7"); 
       }
      
        
    })
        
    $('.link-c-2-s-8').click(function(){
    
       if(current_section != '.sec-c-2-s-8')
       {
           transition_section(".sec-c-2-s-8"); 
       }
      
        
    })
    $('.link-c-2-s-9').click(function(){
    
       if(current_section != '.sec-c-2-s-9')
       {
           transition_section(".sec-c-2-s-9"); 
       }
      
        
    })
        
    $('.link-c-2-s-10').click(function(){
    
       if(current_section != '.sec-c-2-s-10')
       {
           transition_section(".sec-c-2-s-10"); 
       }
      
        
    })
        
    $('.link-c-2-s-11').click(function(){
    
       if(current_section != '.sec-c-2-s-11')
       {
           transition_section(".sec-c-2-s-11"); 
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
            
            // if not scrolled, do it now
            
            if(!scrolled) {
                $('.home-area').animate({marginTop: "-"+$(window).height().toString()+"px"},750);

                  $('.logo-absolute').animate({opacity: 0}, 750);
                  $('.social-media-group').animate({opacity: 0}, 750);
                  setTimeout(function(){ 
                    $(".logo-absolute").css("display","none");
                    $(".social-media-group").css("display","none");
                  } , 500);

                  setTimeout(function(){ MOUSE_OVER = false; } , 750);
                  scrolled = true;
            }
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
        
        $scope.m_new_booking = () => {
            $(".m-booking-input").css("display","unset");
            $(".m-booking-button").css("display","block");
            $(".m-booking-title").css("display","block");
            
            $(".m-booking-button-text").css("display","block");
            $(".m-lds-ring").css("display","none");
                  
                $(".m-booking-checked").css("margin-top","90px");
                $(".m-booking-checked").css("opacity",0);
                $(".m-booking-successful").css("opacity",0);
                $(".m-booking-new-booking").css("opacity",0);

        }
        
        $scope.valid = true;
        
		$scope.submit_booking = ()=>
		{
            // Get content of booking
            email_body = $(".d-booking-description").val();
            email_target = $(".d-booking-email").val();
            email_name = $(".d-booking-name").val();
            
            var variables = {name: email_name, details: email_body, target: email_target, email: email_target}
            var own_variables = {name: email_name , details: email_body, target: "tiyaspakk@gmail.com", email: email_target};
            
            $scope.valid = true;
            $(".booking-error p").css("display","none");
            
            if(email_target != "")
            {
                if(!isEmail(email_target))
                {
                    $scope.valid = false;
                    $(".email-invalid").css("display","block");
                    
                }
            } else {
                $scope.valid = false;
                $(".email-empty").css("display","block"); 
            }
            
            
            if(email_body == "")
            {
                $scope.valid = false;
                $(".details-empty").css("display","block");  
            }
            
            if(email_name == "")
            {
                $scope.valid = false;
                $(".name-empty").css("display","block");  
            }
            
            if($scope.valid)
            {  

                $(".booking-button-text").css("display","none");
                $(".lds-ring").css("display","block");

                emailjs.send('default_service', 'tiya', variables)
                .then(function(response) {
                    emailjs.send('default_service', 'tiya', own_variables)
                    .then(function(response) {
                       $(".booking-input").css("display","none");
                       $(".booking-button").css("display","none");
                       $(".booking-title").css("display","none");

                        $(".booking-checked").animate({marginTop: "80px", opacity: 1}, 500);
                        $(".booking-successful").animate({opacity: 1},500);
                        $(".booking-new_booking").css("display","unset");
                        $(".booking-new-booking").animate({opacity: 1}, 500);
                    }, function(error) {
                       alert("booking error, please try again.");
                    });
                }, function(error) {
                   alert("booking error, please try again.");
                });
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
        
        
        $scope.m_submit_booking = ()=>
		{
            // Get content of booking
            email_body = $(".booking-description").val();
            email_target = $(".booking-email").val();
            email_name = $(".booking-name").val();
            
            var variables = {name: email_name, details: email_body, target: email_target,  email: email_target}
            var own_variables = {name: email_name , details: email_body, target: "tiyaspakk@gmail.com",  email: email_targe};
            
            $scope.valid = true;
            $(".m-booking-error p").css("display","none");
            
            if(email_target != "")
            {
                if(!isEmail(email_target))
                {
                    $scope.valid = false;
                    $(".m-email-invalid").css("display","block");
                    
                }
            } else {
                $scope.valid = false;
                $(".m-email-empty").css("display","block"); 
            }
            
            
            if(email_body == "")
            {
                $scope.valid = false;
                $(".m-details-empty").css("display","block");  
            }
            
            if(email_name == "")
            {
                $scope.valid = false;
                $(".m-name-empty").css("display","block");  
            }
            
            if($scope.valid)
            {  

                $(".m-booking-button-text").css("display","none");
                $(".m-lds-ring").css("display","block");

                emailjs.send('default_service', 'tiya', variables)
                .then(function(response) {
                    emailjs.send('default_service', 'tiya', own_variables)
                    .then(function(response) {
                       $(".m-booking-input").css("display","none");
                       $(".m-booking-button").css("display","none");
                       $(".m-booking-title").css("display","none");

                        $(".m-booking-checked").animate({marginTop: "80px", opacity: 1}, 500);
                        $(".m-booking-successful").animate({opacity: 1},500);
                        $(".m-booking-new_booking").css("display","unset");
                        $(".m-booking-new-booking").animate({opacity: 1}, 500);
                    }, function(error) {
                       console.log('FAILED...', error);
                    });
                }, function(error) {
                   console.log('FAILED...', error);
                });
            } 
            
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
                    $(this).animate({height:180,borderRadius:16},750);
                
                    if($scope.lang == "eng")
                    {
                        $(this).attr("placeholder","Enter a list of services you wish from Tiya and the date you want to drop by. You will receive an email from Tiya upon confirming your booking");
                    } else if ($scope.lang == "ch") {
                        $(this).attr("placeholder","请输入您需要预订的服务项目以及您需要预订的日期。您将会收到一封来自梃雅的电子邮件，以确认您在本次的预订。");
                        
                    } else if ($scope.lang == "kor") {
                        $(this).attr("placeholder","티아에게서 받고 싶은 서비스와 날짜를 선택한 후에 티아에게서 확인 이메일 수령.");
                        
                    }
                    
            });
            
            $(".booking-description").focus(function(){
                    $(this).animate({height:180,borderRadius:16},750);
                
                    if($scope.lang == "eng")
                    {
                        $(this).attr("placeholder","Enter a list of services you wish from Tiya and the date you want to drop by. You will receive an email from Tiya upon confirming your booking");
                    } else if ($scope.lang == "ch") {
                        $(this).attr("placeholder","请输入您需要预订的服务项目以及您需要预订的日期。您将会收到一封来自梃雅的电子邮件，以确认您在本次的预订。");
                        
                    } else if ($scope.lang == "kor") {
                        $(this).attr("placeholder","티아에게서 받고 싶은 서비스와 날짜를 선택한 후에 티아에게서 확인 이메일 수령.");
                        
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
        
        
         $(".booking-description").focus(function(){
                    $(this).animate({height:180,borderRadius:32},750);
                
                    if($scope.lang == "eng")
                    {
                        $(this).attr("placeholder","Enter a list of services you wish from Tiya and the date you want to drop by. You will receive an email from Tiya upon confirming your booking");
                    } else if ($scope.lang == "ch") {
                        $(this).attr("placeholder","请输入您需要预订的服务项目以及您需要预订的日期。您将会收到一封来自梃雅的电子邮件，以确认您在本次的预订。");
                        
                    } else if ($scope.lang == "kor") {
                        $(this).attr("placeholder","Tiya에서 원하는 서비스 목록과 삭제할 날짜를 입력하십시오. 예약 확인시 Tiya 이메일을 보내드립니다.");
                        
                    }
                    
            });
        
    /* #########################################################################
    ############################################################################
    BOOKING SECTION
    
    ############################################################################
    ##########################################################################*/
    
    $(window).load(function(){
       var map_height = $(window).height() * 0.8;
        $("#d-map").css("height", map_height+"px");
        
        $(window).resize(function(){ 
            var map_height = $(window).height() * 0.8;
            $("#d-map").css("height", map_height+"px");
    });
        
 
    });
        
        
		


    
});