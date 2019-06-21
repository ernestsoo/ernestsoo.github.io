jQuery(function () {

  // Cover entirety of script.
  function initScript(resize_bool) {

  // mobile fixed navbar
  var fixed_navbar_top = $(window).height()-60;

  $(".m-fixed-navbar").css("margin-top",fixed_navbar_top.toString() + "px");

  var menu_section_width = ( $(window).width() / 4 ) -10 ;


  $(".menu-section").css("width", menu_section_width.toString() + "px");
  $(".menu-section").css("height","60px");
  var panelRecord = ".menu-home";

  
  $(".m-fixed-hover").css("width", menu_section_width.toString() + "px");
  $(".m-fixed-hover").css("margin-top",fixed_navbar_top.toString() + "px");
  
  
  $(".m-1").click(function(){
    //$(".m-fixed-hover").css("width", menu_section_width.toString() + "px");
    $(".m-fixed-hover").animate({marginLeft:"0px" });
  });

  menu_section_width += 6;
  $(".m-2").click(function(){
    //$(".m-fixed-hover").css("width", menu_section_width.toString() + "px");
    $(".m-fixed-hover").animate({marginLeft: (menu_section_width*1).toString() + "px" });
  });
  
  $(".m-3").click(function(){
    //$(".m-fixed-hover").css("width", menu_section_width.toString() + "px");
    $(".m-fixed-hover").animate({marginLeft: (menu_section_width*2).toString() + "px" });
  });
  
  $(".m-4").click(function(){
    //$(".m-fixed-hover").css("width", menu_section_width.toString() + "px");
    $(".m-fixed-hover").animate({marginLeft: (menu_section_width*3).toString() + "px" });
  });
  
  
  
  
  
  $(".menu-home").click(function(){

    panelSnapInstance.snapToPanel(document.getElementsByClassName("home-section")[0]);

    panelRecord = ".menu-home";
  });


  $(".menu-services").click(function(){

    panelSnapInstance.snapToPanel(document.getElementsByClassName("services-section")[0]);

    panelRecord = ".menu-services";
  });

  $(".menu-book").click(function(){

    panelSnapInstance.snapToPanel(document.getElementsByClassName("book-now-section")[0]);

    panelRecord = ".menu-booking";
  });

  $(".menu-locate").click(function(){

    panelSnapInstance.snapToPanel(document.getElementsByClassName("locate-us-section")[0]);

    panelRecord = ".menu-locate-us";
  });


  var social_left = $(window).width() - 100 -  $(".home-social-media").width();
  // Social Media Margin Top
  $(".home-social-media").css("margin-left",social_left+"px");
 // alert(($(window).width() - 50 - $(".home-social-media").width()));
  
  // Home image CENTERIN
  $(".home-image").css("left", "50px");
  $(".home-image").css("top", ($(".logo").height() + 200).toString() + "px");


  var image_width = $(window).width() - 284 - 250;
  var image_height = $(window).height() -  ($(".logo").height() + 000);

  $(".home-image").css("width",image_width.toString()+"px");
  $(".home-image").css("height",image_height.toString()+"px");

  $(".locate-us-button").click(function(){
        window.location.href = 'https://www.google.com/maps/place/MILAN+SQUARE/@1.5276439,110.3681707,17z/data=!4m8!1m2!2m1!1smilan+square!3m4!1s0x31fba74aabbc5647:0xad44755ebabf907c!8m2!3d1.5274254!4d110.3704698';
  });


  // Carousel Container CENTERING
  $(".carousel-container").css("margin-left", "0px");
  var container_width = $(window).width() - 284 - 50;
  var container_height = $(window).height() -  ($(".services-title").height() + 150)  ;

  $(".carousel-container").css("width",container_width.toString()+ "px");
  $(".carousel-container").css("height",container_height.toString()+ "px")
  $(".carousel-container").css("margin-top","0px");
  $("#map").css("width",container_width.toString()+ "px");
  $("#map").css("height",container_height.toString()+ "px")
  $("#map").css("margin-top","0px");


  container_height = container_height - 100;
  $(".booking-container").css("width",container_width.toString()+ "px");
  $(".booking-container").css("height",container_height.toString()+ "px")
  $(".booking-container").css("margin-top","0px");


  

  
  // Carousel Item CENTERING
  var flexible_width = $(".carousel-container").width() * 0.28;
  var carousel_left = $(".carousel-container").width() - flexible_width;
  carousel_left = carousel_left / 2;

  $(".carousel-item-center").css("margin-left",carousel_left.toString()+"px");

  var carousel_top = $(".carousel-container").height() - 150;
  $(".carousel-item-center").css("margin-top","75px");

  $(".carousel-item-center").css("width", flexible_width.toString() + "px");
  $(".carousel-item-center").css("height", carousel_top.toString() + "px");


  var half = $(".carousel-container").width() - $(".carousel-item-center").width();

  half = half/2;

  var half_right = $(".carousel-item-center").width() + half;

  $(".carousel-detect-left").css("width", half.toString() + "px");
  $(".carousel-detect-right").css("width", half.toString() + "px");
  $(".carousel-detect-left").css("height", $(".carousel-container").height() + "px");
  $(".carousel-detect-right").css("height", $(".carousel-container").height() + "px");
  $(".carousel-detect-right").css("margin-left", half_right.toString() + "px");
  
  $(".carousel-detect-left").click(function(){
    goRight();

    for(var i =0; i < 5; i ++)
                        {
                          if(carousel_array[i] == 2){
                            $(".bullet-"+i.toString()).css("width","8px");
                            $(".bullet-"+i.toString()).css("height","8px");
                            $(".bullet-"+i.toString()).css("border-radius","8px");
                            $(".bullet-"+i.toString()).css("background","white");
                            $(".bullet-"+i.toString()).css("border","1px solid white");
                          } else {
                            $(".bullet-"+i.toString()).css("width","8px");
                            $(".bullet-"+i.toString()).css("height","8px");
                            $(".bullet-"+i.toString()).css("border-radius","8px");
                            $(".bullet-"+i.toString()).css("background","transparent");
                            $(".bullet-"+i.toString()).css("border","1px solid white");
                          }

                        }
  });

  $(".carousel-detect-right").click(function(){
    goLeft();

    for(var i =0; i < 5; i ++)
                        {
                          if(carousel_array[i] == 2){
                            $(".bullet-"+i.toString()).css("width","8px");
                            $(".bullet-"+i.toString()).css("height","8px");
                            $(".bullet-"+i.toString()).css("border-radius","8px");
                            $(".bullet-"+i.toString()).css("background","white");
                            $(".bullet-"+i.toString()).css("border","1px solid white");
                          } else {
                            $(".bullet-"+i.toString()).css("width","8px");
                            $(".bullet-"+i.toString()).css("height","8px");
                            $(".bullet-"+i.toString()).css("border-radius","8px");
                            $(".bullet-"+i.toString()).css("background","transparent");
                            $(".bullet-"+i.toString()).css("border","1px solid white");
                          }

                        }
  });


  // Carousel Image Centering
 $(".carousel-image-center").css("width", $(".carousel-item-center").width().toString() + "px");

 var image_height_center = $(".carousel-item-center").height() - 85;
 $(".carousel-image-center").css("height", image_height_center.toString() + "px");

 var carousel_left_margin = $(".carousel-container").width() * 0.07;
 $(".carousel-item-left").css("margin-left",carousel_left_margin + "px");
 $(".carousel-item-left").css("width", (flexible_width - 25).toString() + "px");
 $(".carousel-item-left").css("height", (carousel_top - 75).toString() + "px");

 $(".carousel-item-right").css("width", (flexible_width - 25).toString() + "px");
 $(".carousel-item-right").css("height", (carousel_top - 75).toString() + "px");

 var carousel_right_margin = $(".carousel-container").width() - carousel_left_margin - $(".carousel-item-right").width();
 
 $(".carousel-item-right").css("margin-left",carousel_right_margin + "px");



  // Carousel Image Centering
  $(".carousel-image-right").css("width", $(".carousel-item-left").width().toString() + "px");

  var image_height = $(".carousel-item-left").height() - 85;
  $(".carousel-image-right").css("height", image_height.toString() + "px");


  // Carousel Image Centering
  $(".carousel-image-left").css("width", $(".carousel-item-left").width().toString() + "px");

  image_height = $(".carousel-item-left").height() - 85;
  $(".carousel-image-left").css("height", image_height.toString() + "px");

  $(".carousel-item-left").css("margin-top", "112.5px");
  $(".carousel-item-right").css("margin-top", "112.5px");

  var carousel_left_left = carousel_left - $("carousel-item-left").width();
  carousel_left_left = carousel_left_left / 2;

  image_height = image_height + 15;
  image_height_center = image_height_center + 15;
  var carousel_array = [0,1,2,3,4,5];
  var position_json = [{top: "100px", left: "-120px", width: $(".carousel-item-right").width()-100, height: $(".carousel-item-right").height()-100, image_height: image_height.toString() + "px", index: 10, opacity: 0, tint: 0},
                       {top: $(".carousel-item-left").css("margin-top"), left: $(".carousel-item-left").css("margin-left"), width: $(".carousel-item-left").width(), height: $(".carousel-item-left").height(), image_height:image_height.toString() + "px", index: 20, opacity: 1, tint: 0.025},
                       {top: $(".carousel-item-center").css("margin-top"), left: $(".carousel-item-center").css("margin-left"), width: $(".carousel-item-center").width(), height: $(".carousel-item-center").height(),image_height: image_height_center.toString() + "px", index: 30 , opacity: 1, tint: 0},
                       {top: $(".carousel-item-right").css("margin-top"), left: $(".carousel-item-right").css("margin-left"), width: $(".carousel-item-right").width(), height: $(".carousel-item-right").height(), image_height: image_height.toString() + "px", index: 20, opacity: 1, tint: 0.025},
                       {top: "100px", left: ($(window).width() * 0.85).toString() + "px", width: $(".carousel-item-right").width()-100, height: $(".carousel-item-right").height()-100, image_height: image_height.toString() + "px", index: 10, opacity: 0, tint: 0}]

                        for(var i =0; i < 5; i ++)
                        {
                          $(".carousel-item-"+i.toString()).css("margin-top", position_json[carousel_array[i]].top );
                          $(".carousel-item-"+i.toString()).css("margin-left", position_json[carousel_array[i]].left );
                          $(".carousel-item-"+i.toString()).css("width", position_json[carousel_array[i]].width );
                          $(".carousel-item-"+i.toString()).css("height", position_json[carousel_array[i]].height);
                          $(".carousel-item-"+i.toString()).css("z-index", position_json[carousel_array[i]].index);
                          $(".carousel-item-"+i.toString()).css("opacity", position_json[carousel_array[i]].opacity);
                          $(".carousel-tint-"+i.toString()).css("opacity", position_json[carousel_array[i]].tint);
                          $(".carousel-item-"+i.toString()).addClass("box-no-no");
                          $(".carousel-image-"+i.toString()).css("height", position_json[carousel_array[i]].image_height);
                        }


                        function goRight() {
                          for(var i =0; i < 5; i ++)
                          {
                            carousel_array[i] = carousel_array[i] + 1;
                          }

                          for(var i =0; i < 5; i ++)
                          {
                            carouselTransition(carousel_array[i],".carousel-item-"+i.toString(),".carousel-image-"+i.toString(),".carousel-tint-"+i.toString());
                          }
                        }

                        function goLeft() {
                          for(var i =0; i < 5; i ++)
                          {
                            carousel_array[i] = carousel_array[i] - 1;
                          }

                          for(var i =0; i < 5; i ++)
                          {
                            carouselTransition(carousel_array[i],".carousel-item-"+i.toString(),".carousel-image-"+i.toString(),".carousel-tint-"+i.toString());
                          }
                        }


                        setTimeout(function(){
                          //goRight();
                        },2000);
                        setTimeout(function(){
                          //goLeft();
                        },4000);

    


                        for(var i =0; i < 5; i ++)
                        {
                          if(carousel_array[i] == 2){
                            $(".bullet-"+i.toString()).css("width","8px");
                            $(".bullet-"+i.toString()).css("height","8px");
                            $(".bullet-"+i.toString()).css("border-radius","8px");
                            $(".bullet-"+i.toString()).css("background","white");
                            $(".bullet-"+i.toString()).css("border","1px solid white");
                          } else {
                            $(".bullet-"+i.toString()).css("width","8px");
                            $(".bullet-"+i.toString()).css("height","8px");
                            $(".bullet-"+i.toString()).css("border-radius","8px");
                            $(".bullet-"+i.toString()).css("background","transparent");
                            $(".bullet-"+i.toString()).css("border","1px solid white");
                          }

                        }



            

  var carousel_indicator_left = $(".carousel-container").width() - $(".carousel-indicator").width();
  carousel_indicator_left = carousel_indicator_left / 2;
   
  var indicator_top = $(".carousel-item-center").height()+parseInt($(".carousel-item-center").css("margin-top"))+15 ;

  $(".carousel-indicator").css("margin-left", carousel_indicator_left.toString() + "px");
  $(".carousel-indicator").css("margin-top",indicator_top.toString()+"px");
                 

  function carouselTransition(index, classname, classimage, classtint) {

    if(index > -1 && index < 5){
    $(classname).animate({marginTop: position_json[index].top, marginLeft: position_json[index].left, width: position_json[index].width, height: position_json[index].height, opacity: position_json[index].opacity},400);
    setTimeout(function(){
      $(classname).css("z-index",position_json[index].index);
    },200);
    
  //  alert(".carousel-tint-"+index.toString())
    $(classtint).css("opacity",position_json[index].tint);
  //  alert(position_json[index].tint)
  // alert( $(".carousel-tint-"+index.toString()).css("opacity"));
    $(classimage).animate({height: position_json[index].image_height},400);
  }
  }
    var left_margin = $(window).width() - $(".bottom-leaf").width();
    var top_margin = $(window).height() - $(".bottom-leaf").height();

    left_margin += 20;
    top_margin += 15;

    $(".bottom-leaf").css("margin-left", left_margin.toString() + "px");
    $(".bottom-leaf").css("margin-top", top_margin.toString() + "px");


    left_margin -= 20;
    top_margin -= 15;

    $(".bottom-leaf-booking").css("margin-left", left_margin.toString() + "px");
    $(".bottom-leaf-booking").css("margin-top", top_margin.toString() + "px");
    left_margin -= 0;
    top_margin += 55;
    $(".top-leaf-test").css("margin-left", left_margin.toString() + "px");
    $(".top-leaf-test").css("margin-top", top_margin.toString() + "px");


  var present_width = $(window).width() - $(".absolute-menu").width() - 170;
  var present_height = $(window).height() - $(".logo").height() -120;
  var present_top = ($(window).height() * 0.25)-50;
  var present_left = 0;


  if($(window).width() > 768)
  {
    $(".home-presentation").css("width", present_width + "px");
    $(".home-presentation").css("height", present_height + "px");
    $(".home-presentation").css("margin-left", present_left + "px");
    $(".home-presentation").css("margin-top", "150px");    

    $(".image-slide").css("width", present_width + "px");
    $(".image-slide").css("height", present_height + "px");
    
  } else {
    $(".home-presentation").css("display","block");

    $(".home-presentation").css("width", "80%");
    $(".home-presentation").css("height", "40%");

    $(".image-slide").css("width", $(".home-presentation").width() + "px");
    $(".image-slide").css("height",  $(".home-presentation").height() + "px");
    
    var mobile_presentation_left = $(window).width() - $(".home-presentation").width();
    mobile_presentation_left = mobile_presentation_left / 2;

    $(".home-presentation").css("margin-left",mobile_presentation_left.toString() + "px");
    $(".home-presentation").css("margin-top", "20%");

    var browse_services_top = $(window).height() * 0.600;
    
    $(".m-browse-services").css("top", browse_services_top.toString() + "px");
  }

  


  var gap_left = $(window).width() * 0.015;

  for (var i = 0; i< 5; i++)
  {
    var incre = i+1;
    var times = i * gap_left;
    $(".image-"+incre.toString()).css("margin-left",times.toString()+"px");


  }


  // Initial Setup
  $(".image-1").css("z-index","101");
  $(".image-2").css("z-index","102");
  $(".image-3").css("z-index","103");
  $(".image-4").css("z-index","104");
  $(".image-5").css("z-index","105");


  var pointer = 5;

  var back_1 = $(".home-presentation").width() - (1*gap_left);
  var back_2 = $(".home-presentation").width() - (2*gap_left);
  var back_3 = $(".home-presentation").width() - (3*gap_left);
  var back_4 = $(".home-presentation").width() - (4*gap_left);




  recursiveSlide(5,true);

  function recursiveSlide(num,boopp){

   
    var boop = boopp;
    var index = num;

    // Starting Point
    if(num == 5 && boop==true){
      setTimeout(function(){

        $(".image-5").animate({marginLeft: back_1.toString() + "px"},1500);

       
          recursiveSlide(4,true);
      
       
      
      },2000)
    
    }else{


    

      if(boop) {
        setTimeout(()=>{

          if(num == 4)
          {
            
            setTimeout(()=>{
              $(".image-"+index.toString()).animate({marginLeft: back_2.toString() + "px"},1500);
              recursiveSlide(index-1,true);
            },3000)

          } else if (num ==3 ){
            
            setTimeout(()=>{
              $(".image-"+index.toString()).animate({marginLeft: back_3.toString() + "px"},1500);
              recursiveSlide(index-1,true);
            },3000)

          } else if (num ==2 ){
           
            setTimeout(()=>{
              $(".image-"+index.toString()).animate({marginLeft: back_4.toString() + "px"},1500);
              recursiveSlide(index-1,true);
            },3000)

          } else if (num ==1 ){
            
             recursiveSlide(index+1,false);
          }
            

        
          
          
          

        },2000);
      } else {

        setTimeout(()=>{
          var amount = (index-1) * gap_left;
        $(".image-"+index.toString()).animate({marginLeft:amount.toString() + "px"},1500);


        if(num ==5 && boop == false){
          recursiveSlide(index,true);
        } else {
          recursiveSlide(index+1,false);
        }
        
        },3000)
        

      }
    }



  }


  $(".input-name").focus(function(){
    $(".name-holder").css("background","url(images/booking_bg.png)");
    $(".name-holder").animate({fontSize: "15px",marginTop:"-52.5px", marginLeft: "20px"}, 250)
  })

  $(".input-email").focus(function(){
    $(".email-holder").css("background","url(images/booking_bg.png)");
    $(".email-holder").animate({fontSize: "15px",marginTop:"-52.5px", marginLeft: "20px"}, 250)
  })

  $(".input-description").focus(function(){
    $(".description-holder").css("background","url(images/booking_bg.png)");
    $(".description-holder").animate({fontSize: "15px",marginTop:"-157.5px", marginLeft: "20px"}, 250)
  })

  var email_booking_top = $(".booking-container").height() - $(".email-container").height();
  email_booking_top = email_booking_top / 2;
  $(".email-container").css("margin-top",email_booking_top.toString() + "px");





    function center_vertical (container,classname) {
      var top = $(container).height() - $(classname).height();
      top = top / 2;
      xf
    //  alert($(classname.toString()).height());
      $(classname).css("margin-top",top.toString() + "px");
    }
    function center_vertical_x (container,classname) {
      var top = $(container).height() - $(classname).height();
      top = top / 2;

    //  alert($(classname.toString()).height());
      $(classname).css("margin-top",top.toString() + "px");
    }
    function center_vertical_top (container,classname) {
      var top = $(container).height() - $(classname).height();
      top = top / 2;
      top = top / 2;
    //  alert($(classname.toString()).height());
      $(classname).css("top",top.toString() + "px");
    }


    // Mobile Settings.

    $(".m-1").click(function(){
      $(".m-home-section").css("display","none");
      $(".m-services-section").css("display","none");
      $(".m-booking-section").css("display","none");
      $(".m-locate-us-section").css("display","none");

      $(".m-home-section").css("display","block");
    })
    
    $(".m-2").click(function(){
      $(".m-home-section").css("display","none");
      $(".m-services-section").css("display","none");
      $(".m-booking-section").css("display","none");
      $(".m-locate-us-section").css("display","none");

      $(".m-services-section").css("display","block");
    })
    
    $(".m-3").click(function(){
      $(".m-home-section").css("display","none");
      $(".m-services-section").css("display","none");
      $(".m-booking-section").css("display","none");
      $(".m-locate-us-section").css("display","none");

      $(".m-booking-section").css("display","block");
    })
    
    $(".m-4").click(function(){
      $(".m-home-section").css("display","none");
      $(".m-services-section").css("display","none");
      $(".m-booking-section").css("display","none");
      $(".m-locate-us-section").css("display","none");

      $(".m-locate-us-section").css("display","block");
    })
    $(".m-home-section").css("width",$(window).width().toString() + "px");
    $(".m-home-section").css("min-height",$(window).height().toString() + "px");

    $(".m-services-section").css("width",$(window).width().toString() + "px");
    $(".m-services-section").css("min-height",$(window).height().toString() + "px");

    $(".m-booking-section").css("width",$(window).width().toString() + "px");
    $(".m-booking-section").css("min-height",$(window).height().toString() + "px");

    $(".m-locate-us-section").css("width",$(window).width().toString() + "px");
    $(".m-locate-us-section").css("min-height",$(window).height().toString() + "px");

    $(".m-home-section").css("background", "#2980b9");
    $(".m-home-section").css("background", "-webkit-linear-gradient(to bottom, #2c3e50, #2980b9)");
    $(".m-home-section").css("background", "linear-gradient(to bottom, #2c3e50, #2980b9");

    $(".m-services-section").css("background", " #CC95C0");
    $(".m-services-section").css("background","-webkit-linear-gradient(to bottom, #7AA1D2, #DBD4B4, #CC95C0)");
    $(".m-services-section").css("background","linear-gradient(to bottom, #7AA1D2, #DBD4B4, #CC95C0)");

    $(".m-booking-section").css("background", "#2980b9");
          $(".m-booking-section").css("background", "-webkit-linear-gradient(to bottom, #2c3e50, #2980b9)");
          $(".m-booking-section").css("background", "linear-gradient(to bottom, #2c3e50, #2980b9");

          $(".m-locate-us-section").css("background", " #CC95C0");
          $(".m-locate-us-section").css("background","-webkit-linear-gradient(to top, #7AA1D2, #DBD4B4, #CC95C0)");
          $(".m-locate-us-section").css("background","linear-gradient(to top, #7AA1D2, #DBD4B4, #CC95C0)");



    center_vertical_x(".booking-container",".whatsapp-container");
    center_vertical_x(".booking-container",".wechat-container");
    center_vertical_x(".booking-container",".telephone-container");

    center_vertical_x(".carousel-container",".carousel-arrow-left");
    center_vertical_x(".carousel-container",".carousel-arrow-right");

    var push_arrow = $(".carousel-container").width() - 30 - 10;
    $(".carousel-arrow-right").css("margin-left",push_arrow.toString()+"px");
 
    var default_option = ".option-email";

    $(".option-email").css("background","rgba(0,0,0,0.70)");

    $(".option-email").click(function(){
      $(".email-container").css("display","none");
      $(".whatsapp-container").css("display","none");
      $(".wechat-container").css("display","none");
      $(".telephone-container").css("display","none");

      $(".email-container").css("display","block");
      $(".option-email").css("background","rgba(0,0,0,0.7)");
      $(default_option).css("background","rgba(0,0,0,0.50)");

      default_option = ".option-email";
    })

    $(".option-whatsapp").click(function(){
      $(".email-container").css("display","none");
      $(".whatsapp-container").css("display","none");
      $(".wechat-container").css("display","none");
      $(".telephone-container").css("display","none");


      $(".whatsapp-container").css("display","block");
      $(".option-whatsapp").css("background","rgba(0,0,0,0.7)");
      $(default_option).css("background","rgba(0,0,0,0.50)");

      default_option = ".option-whatsapp";
    })

    $(".option-wechat").click(function(){
      $(".email-container").css("display","none");
      $(".whatsapp-container").css("display","none");
      $(".wechat-container").css("display","none");
      $(".telephone-container").css("display","none");


      $(".wechat-container").css("display","block");
      $(".option-wechat").css("background","rgba(0,0,0,0.7)");
      $(default_option).css("background","rgba(0,0,0,0.50)");

      default_option = ".option-wechat";
    })

    $(".option-telephone").click(function(){
      $(".email-container").css("display","none");
      $(".whatsapp-container").css("display","none");
      $(".wechat-container").css("display","none");
      $(".telephone-container").css("display","none");


      $(".telephone-container").css("display","block");
      $(".option-telephone").css("background","rgba(0,0,0,0.7)");
      $(default_option).css("background","rgba(0,0,0,0.50)");

      default_option = ".option-telephone";
    })
    $(".individual-service").css("width",$(window).width().toString() + "px");
    $(".individual-service").css("min-height",$(window).height().toString() + "px");

    $(".one-service").css("width",$(window).width().toString() + "px");
    $(".one-service").css("min-height",$(window).height().toString() + "px");
  
    $(".m-one-service").css("width",$(window).width().toString() + "px");
    $(".m-one-service").css("height",$(window).height().toString() + "px");
  

    $(".m-carousel-item-list").click(function(){
      $(".m-service").css("display","unset");
      $(".m-service").animate({opacity: 1},500);
    });
    
    
    // Mobile one service settings here.
    var m_service_display_width = $(window).width() * 0.75;
    $(".m-service-display").css("width",m_service_display_width.toString()+"px");

    
    var m_square_dimenstion = m_service_display_width;

    m_service_display_width = m_service_display_width * 2;
  
    $(".m-service-display").css("height",m_service_display_width.toString()+"px");

    
    $(".m-service-display").css("margin-left", ($(window).width()*0.125).toString() + "px");
    
    $(".display-top").css("width", m_square_dimenstion.toString() + "px");
    $(".display-top").css("height", m_square_dimenstion.toString() + "px");
  
    $(".display-bottom").css("width", m_square_dimenstion.toString() + "px");
    $(".display-bottom").css("height", m_square_dimenstion.toString() + "px");
  
    if( $(".m-service-display").height() > ($(window).height() - 25) )
    {
      $(".m-service-display").css("margin-top", "25px");
    } else {
     // alert("run");
      var temp_top =  ( $(window).height() - $(".m-service-display").height() ) / 2;
      $(".m-service-display").css("margin-top", temp_top.toString()+ "px");
    }

    center_vertical_top(".display-bottom",".m-service-content");

    $(".carousel-item-2").click(function(){

      center_vertical(".service-display",".service-content");
  
      $(".one-service").css("display","unset");
      $(".one-service").animate({opacity: 1},500);
    });

    $(".carousel-item-list").click(function(){

      center_vertical(".service-display",".service-content");
  
      $(".one-service").css("display","unset");
      $(".one-service").animate({opacity: 1},500);
    });


    var service_width = $(window).width() * 0.80;
 
    $(".service-display").css("width", service_width.toString() + "px");

    var service_height = service_width / 2;

    $(".service-display").css("height", service_height.toString() + "px");

    var service_left  = $(window).width() * 0.10;

    $(".service-display").css("margin-left",service_left.toString() + "px");

    var service_top = $(window).height() - parseInt($(".service-display").css("height"));

    service_top = service_top / 2;
    $(".service-display").css("margin-top",service_top.toString() + "px");

    service_width = (service_width / 2) - 4;

    $(".display-left").css("width",service_width.toString() + "px");
    $(".display-left").css("height","100%");

    $(".display-right").css("width",service_width.toString() + "px");
    $(".display-right").css("height","100%");


    var left_margin = $(".display-right").width() - $(".bottom-service-leaf").width();
    var top_margin = $(".display-right").width()- $(".bottom-service-leaf").width();

    left_margin += 20;
    top_margin += 95;

    $(".bottom-service-leaf").css("margin-left", left_margin.toString() + "px");
    $(".bottom-service-leaf").css("margin-top", top_margin.toString() + "px");


    var m_left_margin = $(".display-bottom").width() - $(".bottom-service-leaf").width();
    var m_top_margin = $(".display-bottom").width()- $(".m-bottom-service-leaf").width();

    m_left_margin += 20;
    m_top_margin += 95;

    $(".m-bottom-service-leaf").css("margin-left", m_left_margin.toString() + "px");
    $(".m-bottom-service-leaf").css("margin-top", m_top_margin.toString() + "px");

    
    

    $(".cancel-service").css("margin-left", ($(".service-display").width() - 60) ).toString() + "px";

    $(".cancel-service").click(function(){
      $(".one-service").animate({opacity: 0}, 500);
      setTimeout(()=>{
        $(".one-service").css("display","none");
      },500);
    });

    $(".booking-button-pop").click(function(){

      $(".individual-service").animate({opacity: 0}, 500);
      setTimeout(()=>{
        $(".individual-service").css("display","none");
      },500);
      $(".one-service").animate({opacity: 0}, 500);
      setTimeout(()=>{
        $(".one-service").css("display","none");
        panelSnapInstance.snapToPanel(document.getElementsByClassName("book-now-section")[0]);
      },500);

      
    })

    $(".back-home").click(function(){
      $(".individual-service").animate({opacity: 0}, 500);
      setTimeout(()=>{
        $(".individual-service").css("display","none");
      },500);
    });

    $(".menu-button").click(function(){
      $(".individual-service").css("display","unset");
      $(".individual-service").animate({opacity: 1},500);
    });

    setTimeout(function(){
      $(".menu-1").animate({marginTop: "0px"},150);
      $(".menu-1").animate({opacity: "1"},100);
    },100)

    setTimeout(function(){
      $(".menu-2").animate({marginTop: "0px"},150);
      $(".menu-2").animate({opacity: "1"},100);
    },200)
    setTimeout(function(){
      $(".menu-3").animate({marginTop: "0px"},150);
      $(".menu-3").animate({opacity: "1"},100);
    },300)
    setTimeout(function(){
      $(".menu-4").animate({marginTop: "0px"},150);
      $(".menu-4").animate({opacity: "1"},100);
    },400)

    setTimeout(function(){
      $(".absolute-highlight").animate({left: "0px"});

      $(".icon-scroll").animate({opacity: 1},2500);


    },500);

    $(".absolute-menu").css("margin-left",($(window).width() - 50 - $(".absolute-menu").width()).toString() + "px");
    //$(".logo").css("margin-left",($(window).width() - 100 - $(".logo").width()).toString() + "px");
  

    var defaultOptions = {
          container: document.body,
          panelSelector: '> section',
          directionThreshold: 60,
          delay: 0,
          duration: 500,
          easing: function(t) { return t }
        };

    panelSnapInstance = new PanelSnap(defaultOptions);


    /*
    panelSnapInstance.on('snapStart', function(t){

      alert("start!");

    });

    panelSnapInstance.on('snapStop', function(t){
      alert("end!");

    });*/

    $("section.services-section").css("background", " #CC95C0");
          $("section.services-section").css("background","-webkit-linear-gradient(to bottom, #7AA1D2, #DBD4B4, #CC95C0)");
          $("section.services-section").css("background","linear-gradient(to bottom, #7AA1D2, #DBD4B4, #CC95C0)");

          $("section.book-now-section").css("background", "#2980b9");
          $("section.book-now-section").css("background", "-webkit-linear-gradient(to bottom, #2c3e50, #2980b9)");
          $("section.book-now-section").css("background", "linear-gradient(to bottom, #2c3e50, #2980b9");

          $("section.locate-us-section").css("background", " #CC95C0");
          $("section.locate-us-section").css("background","-webkit-linear-gradient(to top, #7AA1D2, #DBD4B4, #CC95C0)");
          $("section.locate-us-section").css("background","linear-gradient(to top, #7AA1D2, #DBD4B4, #CC95C0)");

    panelSnapInstance.on('activatePanel', function(t){
      // Able to print the class name of each section.
      //alert(t.className);

     

      if(t.className == "home-section") {
          $(".absolute-highlight").animate({top: "30px", width: $(".menu-home").width().toString()}, 200);
          $(".menu-item").css("color","#ffffff");
          $(".absolute-highlight").css("border-bottom","1px solid #ffffff");
     
        } else if(t.className == "services-section") {
          //alert("run-service");
          $(".absolute-highlight").animate({top: "82px", width: $(".menu-services").width().toString()}, 200);
          $(".menu-item").css("color","#000000");
          $(".absolute-highlight").css("border-bottom","1px solid #000000");
          //$("section.services-section").css("background", " #E1C6B5");


      
          $(".icon-scroll").animate({opacity: 0},500);




      } else if(t.className == "book-now-section") {
          $(".absolute-highlight").animate({top: "135px", width: $(".menu-book").width().toString()}, 200);

     
          $(".menu-item").css("color","#ffffff");
          $(".absolute-highlight").css("border-bottom","1px solid #ffffff");
          //$("section.book-now-section").css("background", "#1C4C63");

       

        
      } else if(t.className == "locate-us-section") {
         $(".absolute-highlight").animate({top: "190px", width: $(".menu-locate").width().toString()}, 200);
     
         
         
          $(".menu-item").css("color","#000000");
          $(".absolute-highlight").css("border-bottom","1px solid #000000");
         // $("section.locate-us-section").css("background", " #E1C6B5");
      }

      selectedMenuItem = t.className;

      
    });

    $(".absolute-highlight").css("top","30px");    
    $(".absolute-highlight").css("width", $(".menu-home").width().toString());

  }

  



// A $( document ).ready() block.
$( document ).ready(function() {

    var resize_tracker = false;
    initScript(false);

    $( window ).resize(function() {
      resize_tracker = true;

      setTimeout(function(){

      },250);
      location.reload();
    });
});

});

