
$(document).ready(function () {


    $(".announcement-body").css("width", $(window).width() + "px" );
    $(".announcement-body").css("height", $(window).height() + "px" );

    var left_margin = $(window).width() - $(".bottom-leaf").width();
    var top_margin = $(window).height() - $(".bottom-leaf").height();

    left_margin += 20;
    top_margin -= 10;

    $(".bottom-leaf").css("margin-left", left_margin.toString() + "px");
    $(".bottom-leaf").css("margin-top", top_margin.toString() + "px");

   // Set the date we're counting down to
var countDownDate = new Date("June 28, 2019 15:00:00").getTime();
$(".content-2").css("min-height",$(window).height()+"px");


// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";


  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }






  // Do every second:

  var coming_left = $(window).width() - $(".coming-soon").width();
coming_left = coming_left / 2;

//(".coming-soon").css("margin-left", coming_left + "px");

var countdown_width = $(window).width() * 0.75;
var countdown_left = $(window).width() * 0.125;

$(".countdown-container").css("width",countdown_width.toString() + "px");
$(".countdown-container").css("margin-left", countdown_left.toString() + "px");

var countdown_item_width = $(".countdown-container").width() * 0.1875;
var countdown_item_left = $(".countdown-container").width() * 0.05;

$(".countdown-item").css("width",countdown_item_width + "px");
$(".countdown-item").css("height",countdown_item_width + "px");

$(".countdown-item").css("margin-left", countdown_item_left + "px");

var countdown_value_left_day = $(".countdown-item").width() - $(".countdown-value-day").width();
countdown_value_left_day = countdown_value_left_day / 2;

$(".countdown-value-day").css("margin-left", countdown_value_left_day.toString()+"px")


var countdown_value_left = $(".countdown-item").width() - $(".countdown-value-hour").width();
countdown_value_left = countdown_value_left / 2;

$(".countdown-value-hour").css("margin-left", countdown_value_left.toString()+"px")

var countdown_value_left_minute = $(".countdown-item").width() - $(".countdown-value-minute").width();
countdown_value_left_minute = countdown_value_left_minute / 2;



$(".countdown-value-minute").css("margin-left", countdown_value_left_minute.toString()+"px")

var countdown_value_second = $(".countdown-item").width() - $(".countdown-value-second").width();
countdown_value_second = countdown_value_second / 2;

$(".countdown-value-second").css("margin-left", countdown_value_second.toString()+"px")


var countdown_text_left_day = $(".countdown-item").width() - $(".countdown-text-day").width();
countdown_text_left_day = countdown_text_left_day/ 2;

$(".countdown-text-day").css("margin-left", countdown_text_left_day.toString()+"px");



var countdown_text_left = $(".countdown-item").width() - $(".countdown-text-hour").width();
countdown_text_left = countdown_text_left / 2;

$(".countdown-text-hour").css("margin-left", countdown_text_left.toString()+"px");


var countdown_text_left_minute = $(".countdown-item").width() - $(".countdown-text-minute").width();
countdown_text_left_minute = countdown_text_left_minute / 2;

$(".countdown-text-minute").css("margin-left", countdown_text_left_minute.toString()+"px");

var countdown_text_left_second = $(".countdown-item").width() - $(".countdown-text-second").width();
countdown_text_left_second = countdown_text_left_second / 2;

$(".countdown-text-second").css("margin-left", countdown_text_left_second.toString()+"px");





$(".countdown-text-hour").css("margin-top", ($(".countdown-value-hour").height()+15)+"px");
$(".countdown-text-day").css("margin-top", ($(".countdown-value-hour").height()+15)+"px");
$(".countdown-text-minute").css("margin-top", ($(".countdown-value-hour").height()+15)+"px");
$(".countdown-text-second").css("margin-top", ($(".countdown-value-hour").height()+15)+"px");


var countdown_group_hour_left = countdown_item_width - $(".countdown-group-hour").height();

countdown_group_hour_left = countdown_group_hour_left / 2;
countdown_group_hour_left = countdown_group_hour_left / 2;

$(".countdown-group-hour").css("margin-top",countdown_group_hour_left.toString() + "px");


}, 1000);


var coming_left = $(window).width() - $(".coming-soon").width();
coming_left = coming_left / 2;

//(".coming-soon").css("margin-left", coming_left + "px");

var countdown_width = $(window).width() * 0.75;
var countdown_left = $(window).width() * 0.125;

$(".countdown-container").css("width",countdown_width.toString() + "px");
$(".countdown-container").css("margin-left", countdown_left.toString() + "px");

var countdown_item_width = $(".countdown-container").width() * 0.1875;
var countdown_item_left = $(".countdown-container").width() * 0.05;

$(".countdown-item").css("width",countdown_item_width + "px");
$(".countdown-item").css("height",countdown_item_width + "px");

$(".countdown-item").css("margin-left", countdown_item_left + "px");

var countdown_value_left_day = $(".countdown-item").width() - $(".countdown-value-day").width();
countdown_value_left_day = countdown_value_left_day / 2;

$(".countdown-value-day").css("margin-left", countdown_value_left_day.toString()+"px")


var countdown_value_left = $(".countdown-item").width() - $(".countdown-value-hour").width();
countdown_value_left = countdown_value_left / 2;

$(".countdown-value-hour").css("margin-left", countdown_value_left.toString()+"px")

var countdown_value_left_minute = $(".countdown-item").width() - $(".countdown-value-minute").width();
countdown_value_left_minute = countdown_value_left_minute / 2;



$(".countdown-value-minute").css("margin-left", countdown_value_left_minute.toString()+"px")

var countdown_value_second = $(".countdown-item").width() - $(".countdown-value-second").width();
countdown_value_second = countdown_value_second / 2;

$(".countdown-value-second").css("margin-left", countdown_value_second.toString()+"px")


var countdown_text_left_day = $(".countdown-item").width() - $(".countdown-text-day").width();
countdown_text_left_day = countdown_text_left_day/ 2;

$(".countdown-text-day").css("margin-left", countdown_text_left_day.toString()+"px");



var countdown_text_left = $(".countdown-item").width() - $(".countdown-text-hour").width();
countdown_text_left = countdown_text_left / 2;

$(".countdown-text-hour").css("margin-left", countdown_text_left.toString()+"px");


var countdown_text_left_minute = $(".countdown-item").width() - $(".countdown-text-minute").width();
countdown_text_left_minute = countdown_text_left_minute / 2;

$(".countdown-text-minute").css("margin-left", countdown_text_left_minute.toString()+"px");

var countdown_text_left_second = $(".countdown-item").width() - $(".countdown-text-second").width();
countdown_text_left_second = countdown_text_left_second / 2;

$(".countdown-text-second").css("margin-left", countdown_text_left_second.toString()+"px");





$(".countdown-text-hour").css("margin-top", ($(".countdown-value-hour").height()+15)+"px");
$(".countdown-text-day").css("margin-top", ($(".countdown-value-hour").height()+15)+"px");
$(".countdown-text-minute").css("margin-top", ($(".countdown-value-hour").height()+15)+"px");
$(".countdown-text-second").css("margin-top", ($(".countdown-value-hour").height()+15)+"px");

var countdown_group_hour_left = countdown_item_width - $(".countdown-group-hour").height();

countdown_group_hour_left = countdown_group_hour_left / 2;
countdown_group_hour_left = countdown_group_hour_left / 2;

$(".countdown-group-hour").css("margin-top",countdown_group_hour_left.toString() + "px");


$( window ).resize(function() { 
    

  $(".announcement-body").css("width", $(window).width() + "px" );
  $(".announcement-body").css("height", $(window).height() + "px" );

  var left_margin = $(window).width() - $(".bottom-leaf").width();
  var top_margin = $(window).height() - $(".bottom-leaf").height();

  left_margin += 20;
  top_margin += 15;

  $(".bottom-leaf").css("margin-left", left_margin.toString() + "px");
  $(".bottom-leaf").css("margin-top", top_margin.toString() + "px");

 // Set the date we're counting down to
var countDownDate = new Date("June 22, 2019 15:37:25").getTime();




var coming_left = $(window).width() - $(".coming-soon").width();
coming_left = coming_left / 2;

//(".coming-soon").css("margin-left", coming_left + "px");

var countdown_width = $(window).width() * 0.75;
var countdown_left = $(window).width() * 0.125;

$(".countdown-container").css("width",countdown_width.toString() + "px");
$(".countdown-container").css("margin-left", countdown_left.toString() + "px");

var countdown_item_width = $(".countdown-container").width() * 0.1875;
var countdown_item_left = $(".countdown-container").width() * 0.05;

$(".countdown-item").css("width",countdown_item_width + "px");
$(".countdown-item").css("height",countdown_item_width + "px");

$(".countdown-item").css("margin-left", countdown_item_left + "px");

var countdown_value_left_day = $(".countdown-item").width() - $(".countdown-value-day").width();
countdown_value_left_day = countdown_value_left_day / 2;

$(".countdown-value-day").css("margin-left", countdown_value_left_day.toString()+"px")


var countdown_value_left = $(".countdown-item").width() - $(".countdown-value-hour").width();
countdown_value_left = countdown_value_left / 2;

$(".countdown-value-hour").css("margin-left", countdown_value_left.toString()+"px")

var countdown_value_left_minute = $(".countdown-item").width() - $(".countdown-value-minute").width();
countdown_value_left_minute = countdown_value_left_minute / 2;



$(".countdown-value-minute").css("margin-left", countdown_value_left_minute.toString()+"px")

var countdown_value_second = $(".countdown-item").width() - $(".countdown-value-second").width();
countdown_value_second = countdown_value_second / 2;

$(".countdown-value-second").css("margin-left", countdown_value_second.toString()+"px")


var countdown_text_left_day = $(".countdown-item").width() - $(".countdown-text-day").width();
countdown_text_left_day = countdown_text_left_day/ 2;

$(".countdown-text-day").css("margin-left", countdown_text_left_day.toString()+"px");



var countdown_text_left = $(".countdown-item").width() - $(".countdown-text-hour").width();
countdown_text_left = countdown_text_left / 2;

$(".countdown-text-hour").css("margin-left", countdown_text_left.toString()+"px");


var countdown_text_left_minute = $(".countdown-item").width() - $(".countdown-text-minute").width();
countdown_text_left_minute = countdown_text_left_minute / 2;

$(".countdown-text-minute").css("margin-left", countdown_text_left_minute.toString()+"px");

var countdown_text_left_second = $(".countdown-item").width() - $(".countdown-text-second").width();
countdown_text_left_second = countdown_text_left_second / 2;

$(".countdown-text-second").css("margin-left", countdown_text_left_second.toString()+"px");





$(".countdown-text-hour").css("margin-top", ($(".countdown-value-hour").height()+15)+"px");
$(".countdown-text-day").css("margin-top", ($(".countdown-value-hour").height()+15)+"px");
$(".countdown-text-minute").css("margin-top", ($(".countdown-value-hour").height()+15)+"px");
$(".countdown-text-second").css("margin-top", ($(".countdown-value-hour").height()+15)+"px");

var countdown_group_hour_left = countdown_item_width - $(".countdown-group-hour").height();

countdown_group_hour_left = countdown_group_hour_left / 2;
countdown_group_hour_left = countdown_group_hour_left / 2;

$(".countdown-group-hour").css("margin-top",countdown_group_hour_left.toString() + "px");

var content_top = $(window).height() - $(".content").height();

content_top = content_top * 0.44;

$(".content").css("margin-top", content_top.toString() + "px");

var logo_left = $(window).width() - $(".logo").width();

$(".logo").css("margin-top", "25px");
$(".logo").css("margin-left", (logo_left-25) + "px");




var social_top = $(window).height() - $(".home-social-media").height();
$(".home-social-media").css("margin-left","40px");
$(".home-social-media").css("margin-top",(social_top -50 )+ "px");

});

var content_top = (($(".display-right").height() - $(".service-content").height())/2)-35;

$(".lol").css("margin-top",content_top.toString()+ "px");



var content_top = $(window).height() - $(".content").height();

content_top = content_top * 0.44;

$(".content").css("margin-top", content_top.toString() + "px");


var logo_left = $(window).width() - $(".logo").width();

$(".logo").css("margin-top", "25px");
$(".logo").css("margin-left", (logo_left-25) + "px");

  var social_top = $(window).height() - $(".home-social-media").height();
  $(".home-social-media").css("margin-left","40px");
  $(".home-social-media").css("margin-top",(social_top -50 )+ "px");
});

$(".one-service").css("width",$(window).width().toString() + "px");
$(".one-service").css("min-height",$(window).height().toString() + "px");





   
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


var m_left_margin = $(".display-bottom").width() - $(".m-bottom-service-leaf").width();
var m_top_margin = $(".display-bottom").width()- $(".m-bottom-service-leaf").width();

m_left_margin -= 10;
m_top_margin -= 35;

$(".m-bottom-service-leaf").css("margin-left", m_left_margin.toString() + "px");
$(".m-bottom-service-leaf").css("margin-top", m_top_margin.toString() + "px");

$(".cancel-service").css("margin-left", ($(".service-display").width() - 60) ).toString() + "px";

    $(".cancel-service").click(function(){
      $(".one-service").animate({opacity: 0}, 500);
      setTimeout(()=>{
        $(".one-service").css("display","none");
      },500);
    });


 
    // Mobile one service settings here.
    var m_service_display_width = $(window).width() * 0.90;
    $(".m-service-display").css("width",m_service_display_width.toString()+"px");

    
    var m_square_dimenstion = m_service_display_width;

    m_service_display_width = m_service_display_width * 2;

    if($(window).width() < 350) {
      $(".m-service-display").css("min-height",m_service_display_width.toString()+"px");
    }
  

    
    $(".m-service-display").css("margin-left", ($(window).width()*0.05).toString() + "px");
    
    
    if($(window).width() < 350) {
      $(".display-top").css("width", m_square_dimenstion.toString() + "px");
     $(".display-top").css("height", m_square_dimenstion.toString() + "px");
    } else {
      $(".display-top").css("min-height", "350px");
    }

    if($(window).width() < 350) {
  
    $(".display-bottom").css("width", m_square_dimenstion.toString() + "px");
    $(".display-bottom").css("min-height", m_square_dimenstion.toString() + "px");

    }
  
  
      $(".m-service-display").css("margin-top", "15px");
  

    function center_vertical_top (container,classname) {
      var top = $(container).height() - $(classname).height();
    
      top = top / 2;
    //  alert($(classname.toString()).height());
      $(classname).css("top",top.toString() + "px");
    }




     // 1i 
     topa = $(".m-service-content").width()   -200;

    // 1bl



      
 var leaftop = $(".display-1").height() - 100;
 var leafleft = $(".display-1").width() - 100;
  
 leaftop += 25;
 
 $(".m-bottom-service-leaf-1").css("top",leaftop.toString()+"px");
 $(".m-bottom-service-leaf-1").css("left",leafleft.toString()+"px");
     


     // 2ai 
     topa = $(".m-service-content-2").width()   -200;


     

      // 2bl



      
 var leaftop = $(".display-2").height() - 100;
 var leafleft = $(".display-2").width() - 100;
  
 leaftop += 45;
 
 $(".m-bottom-service-leaf-2").css("top",leaftop.toString()+"px");
 $(".m-bottom-service-leaf-2").css("left",leafleft.toString()+"px");
     


     // 3ai 
     topa = $(".m-service-content-3").width()   -200;

// 3bl



      
var leaftop = $(".display-3").height() - 100;
var leafleft = $(".display-3").width() - 100;
 
leaftop += 30;

$(".m-bottom-service-leaf-3").css("top",leaftop.toString()+"px");
$(".m-bottom-service-leaf-3").css("left",leafleft.toString()+"px");
    
     

 

     // 3c
     topa = ($(".display-3").width() - $(".center-group-3").width()) - 20;
     topa = topa/ 2;
     topa = topa* 0.63;
    
     $(".center-group-3").css("margin-left",topa.toString() + "px");

    // 4a
    topa = ($(".display-4a").height() - $(".m-service-content-4a").height()) - 20;
    topa = topa/ 2;

   
    //$(".m-service-content-4a").css("top",topa.toString() + "px");
     // 4b
     topa = ($(".display-4b").height() - $(".m-service-content-4b").height()) - 20;
     topa = topa/ 2;


     //$(".m-service-content-4b").css("top",topa.toString() + "px");

     // 4ai 







 // 4bl
 var leaftop = $(".display-4a").height() - 100;
 var leafleft = $(".display-4a").width() - 100;
  
 leaftop += 30;
 
 $(".m-bottom-service-leaf-4a").css("top",leaftop.toString()+"px");
 $(".m-bottom-service-leaf-4a").css("left",leafleft.toString()+"px");
     // 4bl
     var leaftop = $(".display-4b").height() - 100;
     var leafleft = $(".display-4b").width() - 100;
      
     leaftop += 40;
     
     $(".m-bottom-service-leaf-4b").css("top",leaftop.toString()+"px");
     $(".m-bottom-service-leaf-4b").css("left",leafleft.toString()+"px");



      // 4ac
      topa = ($(".display-4a").width() - $(".center-group-4a").width()) - 20;
      topa = topa/ 2;
      topa = topa* 0.63;

      $(".center-group-4a").css("margin-left",topa.toString() + "px");










     // 5ai 
     topa = $(".m-service-content-5b").width()   -200;


   

      // 5bl



      
 var leaftop = $(".display-5a").height() - 100;
 var leafleft = $(".display-5a").width() - 100;
  
 leaftop += 30;
 
 $(".m-bottom-service-leaf-5a").css("top",leaftop.toString()+"px");
 $(".m-bottom-service-leaf-5a").css("left",leafleft.toString()+"px");
     // 5bl
     var leaftop = $(".display-5b").height() - 100;
     var leafleft = $(".display-5b").width() - 100;
    
     leaftop += 40;
     
     $(".m-bottom-service-leaf-5b").css("top",leaftop.toString()+"px");
     $(".m-bottom-service-leaf-5b").css("left",leafleft.toString()+"px");
      // 5ac
      topa = ($(".display-5a").width() - $(".center-group-5a").width()) - 20;
      topa = topa/ 2;
      topa = topa* 0.63;

      $(".center-group-5a").css("margin-left",topa.toString() + "px");

  













           // 6ai 
     topa = $(".m-service-content-6b").width()   -200;




      // 6bl



      
 var leaftop = $(".display-6a").height() - 100;
 var leafleft = $(".display-6a").width() - 100;
  
 leaftop += 30;
 
 $(".m-bottom-service-leaf-6a").css("top",leaftop.toString()+"px");
 $(".m-bottom-service-leaf-6a").css("left",leafleft.toString()+"px");
     // 6bl
     var leaftop = $(".display-6b").height() - 100;
     var leafleft = $(".display-6b").width() - 100;
    
     leaftop += 40;
     
     $(".m-bottom-service-leaf-6b").css("top",leaftop.toString()+"px");
     $(".m-bottom-service-leaf-6b").css("left",leafleft.toString()+"px");
      // 6ac
      topa = ($(".display-6a").width() - $(".center-group-6a").width()) - 20;
      topa = topa/ 2;
      topa = topa* 0.63;

      $(".center-group-6a").css("margin-left",topa.toString() + "px");

  









           // 7ai 
           topa = $(".m-service-content-7b").width()   -200;



            // 7bl
      
      
      
            
       var leaftop = $(".display-7a").height() - 100;
       var leafleft = $(".display-7a").width() - 100;
        
       leaftop += 30;
       
       $(".m-bottom-service-leaf-7a").css("top",leaftop.toString()+"px");
       $(".m-bottom-service-leaf-7a").css("left",leafleft.toString()+"px");
           // 7bl
           var leaftop = $(".display-7b").height() - 100;
           var leafleft = $(".display-7b").width() - 100;
          
           leaftop += 40;
           
           $(".m-bottom-service-leaf-7b").css("top",leaftop.toString()+"px");
           $(".m-bottom-service-leaf-7b").css("left",leafleft.toString()+"px");
            // 7ac
            topa = ($(".display-7a").width() - $(".center-group-7a").width()) - 20;
            topa = topa/ 2;
            topa = topa* 0.63;
      
            $(".center-group-7a").css("margin-left",topa.toString() + "px");
      
























            
           // 8ai 
           topa = $(".m-service-content-8b").width()   -200;


  
      
            // 8bl
      
      
      
            
       var leaftop = $(".display-8a").height() - 100;
       var leafleft = $(".display-8a").width() - 100;
        
       leaftop += 30;
       
       $(".m-bottom-service-leaf-8a").css("top",leaftop.toString()+"px");
       $(".m-bottom-service-leaf-8a").css("left",leafleft.toString()+"px");
           // 8bl
           var leaftop = $(".display-8b").height() - 100;
           var leafleft = $(".display-8b").width() - 100;
          
           leaftop += 40;
           
           $(".m-bottom-service-leaf-8b").css("top",leaftop.toString()+"px");
           $(".m-bottom-service-leaf-8b").css("left",leafleft.toString()+"px");
            // 8ac
            topa = ($(".display-8a").width() - $(".center-group-8a").width()) - 20;
            topa = topa/ 2;
            topa = topa* 0.63;
      
            $(".center-group-8a").css("margin-left",topa.toString() + "px");
      







          





         
           // 9ai 
           topa = $(".m-service-content-9b").width()   -200;


      
            // 9bl
      
      
      
            
       var leaftop = $(".display-9a").height() - 100;
       var leafleft = $(".display-9a").width() - 100;
        
       leaftop += 30;
       
       $(".m-bottom-service-leaf-9a").css("top",leaftop.toString()+"px");
       $(".m-bottom-service-leaf-9a").css("left",leafleft.toString()+"px");
           // 8bl
           var leaftop = $(".display-9b").height() - 100;
           var leafleft = $(".display-9b").width() - 100;
          
           leaftop += 40;
           
           $(".m-bottom-service-leaf-9b").css("top",leaftop.toString()+"px");
           $(".m-bottom-service-leaf-9b").css("left",leafleft.toString()+"px");
            // 8ac
            topa = ($(".display-9a").width() - $(".center-group-9a").width()) - 20;
            topa = topa/ 2;
            topa = topa* 0.63;
      
            $(".center-group-9a").css("margin-left",topa.toString() + "px");




            
      
        
      

        
      


             
           // 10ai 
           topa = $(".m-service-content-10").width()   -200;


        
      
            // 10bl
      
      
      
            
       var leaftop = $(".display-10").height() - 100;
       var leafleft = $(".display-10").width() - 100;
        
       leaftop += 30;
       
       $(".m-bottom-service-leaf-10").css("top",leaftop.toString()+"px");
       $(".m-bottom-service-leaf-10").css("left",leafleft.toString()+"px");






              
           // 10ai 
           topa = $(".m-service-content-11").width()   -200;


      
      



     // 11
     topa = ($(".display-3").height() - $(".m-service-content-11").height()) - 20;
     topa = topa/ 2;
 
    
     //$(".m-service-content-11").css("top",topa.toString() + "px");

     // 11c
     topa = ($(".display-11").width() - $(".center-group-11").width()) - 20;
     topa = topa/ 2;
     topa = topa* 0.63;

     if ($(window).width() < 350 ) {
    //  $(".center-group-11").css("margin-left",topa.toString() + "px");

    }


      // 11bl



      
      var leaftop = $(".display-11").height() - 100;
      var leafleft = $(".display-11").width() - 100;
       
      leaftop += 30;
      
      $(".m-bottom-service-leaf-11").css("top",leaftop.toString()+"px");
      $(".m-bottom-service-leaf-11").css("left",leafleft.toString()+"px");


     
    

     









    var m_left_margin = $(".display-bottom").width() - $(".m-bottom-service-leaf").width();
    var m_top_margin = $(".display-bottom").width()- $(".m-bottom-service-leaf").width();

    m_left_margin += 10;
    m_top_margin += 45;

    $(".m-bottom-service-leaf").css("margin-left", m_left_margin.toString() + "px");
    $(".m-bottom-service-leaf").css("margin-top", m_top_margin.toString() + "px");

    var current_service= ".display-1";
    $(".m-service").click(function(){
      $(".m-service").animate({opacity:0},400);
      setTimeout(function(){
        $(".m-service").css("display","none");
      })

      $(current_service).css("display","none");
    })

    
 $('.m-indicator').css('margin-left','50%;');

    for(var i = 1; i<12; i++){
      eval("  $('.display-all').css('display','none');  $('.list-"+i.toString()+"').click(function(){  $('.one-service').animate({opacity: 1}, 500);    setTimeout(function(){$('.m-service').css('display','block'); },500); $('.display-"+i.toString()+"').css('display','block');  topa = $('.m-service-content').width()   -200; var temp = $('.m-service-content-"+i.toString()+"').width()   -200; $('.m-indicator').css('margin-left','50%;'); current_service = '.display-"+i.toString()+"'; })     ");
    }

           // 4bl
 
