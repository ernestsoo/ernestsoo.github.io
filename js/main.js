
$(document).ready(function () {


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

if($(window).width() > 399 )
{
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


} else {
  $(".countdown-text-day").css("margin-top","50px");
  $(".countdown-text-hour").css("margin-top","50px");
  $(".countdown-text-minute").css("margin-top","50px");
  $(".countdown-text-second").css("margin-top","50px");
}


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

if($(window).width() > 399 )
{
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



}else {
  $(".countdown-text-day").css("margin-top","50px");
  $(".countdown-text-hour").css("margin-top","50px");
  $(".countdown-text-minute").css("margin-top","50px");
  $(".countdown-text-second").css("margin-top","50px");
}

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






   