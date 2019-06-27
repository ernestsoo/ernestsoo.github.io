/* 
Script name: Executing script
Theme: AutoFocus
Author: Verve Themes
Copyright: All rights reserved.
*/

$j=jQuery.noConflict();
$j(document).ready(function($) {
	
/* ============================================================================================================
/*	ON PAGE LOAD
/* ============================================================================================================ */

/* iOS detect */
var deviceAgent = navigator.userAgent.toLowerCase();
var isIOS = deviceAgent.match(/(iphone|ipod|ipad)/);

	
/* left trunk */
$j('.sec_left').css('height',$j(window).height()-72); //Section left height should be (window height - control bar - 2px margin)

/* navigation menu + nav menu widget */
$j('.nav-bar li').has('ul').addClass("has-flyout");
$j('.nav-bar li > ul').addClass("flyout-tier-1");
$j('.nav-bar li li > ul').addClass("flyout-tier-2").removeClass("flyout-tier-1");	
$j('.nav-bar li li li > ul').addClass("flyout-tier-3").removeClass("flyout-tier-1").removeClass("flyout-tier-2");
$j('.widget_nav_menu ul li').has('ul').addClass("has-flyout");
$j('.widget_nav_menu ul>li.has-flyout').mouseenter(function(){
	$j(this).children('ul.sub-menu').slideDown(300);
});
$j('.widget_nav_menu ul>li.has-flyout').mouseleave(function(){
	$j(this).children('ul.sub-menu').slideUp(300);
});

/* container, content & aside */
if ($j('.container').hasClass('on_stealth')) {
	$j('.container #content').css('top',-$j(this).outerHeight(true));
	$j('.container aside').css('top',-$j(this).outerHeight(true));
} 
$j('.attachment .container').css('min-height',$j(window).height()-$j('#thumb-tray-container').height()-3); //For attachment pages only
	
/* thumbtray */
$j('#thumb-tray').css('width',$j(window).width()-263); //263px is deducted to to encorporate the control bar + the view more button on the left
	$j('.attachment #thumb-tray-container').css({'width':$j(window).width()-357});
	$j('.attachment #thumb-tray-container > #thumb-tray').css({'width':$j(window).width()-377,'left':'10px'});

/*attachment page */
$j('.single-attachment #content').css({'width':$j(window).width()-252, 'height':$j(window).height()}); //252 - To incorporate the right sidebar
$j('#single-attachment').css('height',$j(window).height()-220);
$j(window).load(function() {
	$j('.single-attachment h1').css('width',$j('#single-attachment img').outerWidth()).animate({'opacity':'1'},100);
});
	if ($.browser.msie && parseInt($.browser.version, 10)<=9) {
		$j('.attachment #go-fullscreen').css('display','none');
	}


/* adding nth-child classes (just because of IE grrrr) */
$j('.gallery-archive article.vt_ox_gallery:nth-child(3n+3)').addClass('no_margin');
$j('.gallery-archive article.vt_ox_gallery .baby-thumbs a:nth-child(3n+3) img').addClass('no_margin');
$j('article #content-thumbs ul li:nth-child(2n)').addClass('no_margin');

/* hiding address-bar on Mobile Safari */
window.scrollTo(0,0);


/* ============================================================================================================
/*	EVENTS (click, hover, etc)
/* ============================================================================================================ */

/* geopin buttons */
$j('.geopin').click(function(){
	$j('.sec_left').animate({'left':-$j('.sec_left').outerWidth()},200,function(){$j('.sec_left').css('display','none')});
	$j('#thumb-tray-container').fadeOut(20);
	
	$j('#content, aside, #info-close').fadeOut(20);
	
	$j('.slideall,#nextslide,#prevslide,#pauseplay').fadeOut(2,function(){
		$j('.geopin').fadeOut(2,function(){
			$j('.geopin-back').fadeIn(2).css('display','inline-block');
		});
		$j('#controls-wrapper').stop().animate({'width':'60'},200,'easeOutExpo');
	});
    $j('#supersized').animate({'opacity':'0'},300);

    $j('#geomap').css('height',$j(window).height()).delay(700).animate({opacity:1},700,function(){$j(this).css('z-index','0');});
});
$j('.geopin-back').click(function(){
	$j(this).fadeOut(10, function(){
		$j('.geopin').fadeIn(300);
	});
	$j('#geomap').animate({opacity:0},300,function(){$j(this).css('z-index','-1');}).css('height','0');
	$j('#supersized').animate({'opacity':'1'},300);
	
	$j('.sec_left').css('display','block').animate({'left':'0'},200);
	$j('#thumb-tray-container').fadeIn(20);
	$j('#content, aside, #info-close').fadeIn(20);
	
	$j('.slideall-back').css('display','none');
	$j('#controls-wrapper').stop().animate({'width':'198'},200,'easeOutExpo',function(){
		$j('.geopin,#nextslide,#prevslide,#pauseplay,#view-info,.slideall').fadeIn(2);
	});
});

/* view info + close info buttons */
$j('#view-info').click(function(){
	$j('#thumb-tray-container').animate({'bottom':-$j('#thumb-tray').height()},300);
	$j('.container').css('display','block');
	$j('.focus').fadeIn(700);
	$j('.container #content').css('top',-$j('#content').outerHeight(true)).stop().animate({'top':0},700,'easeOutExpo');
	setTimeout(function(){
		$j('.container aside').css('top',-$j('aside').outerHeight(true)).stop().animate({'top':0},700,'easeOutExpo',function(){
			$j('#info-close').fadeIn(100);
		});
	}, 200);
	//$j('.container').css('top',-$j('.container').outerHeight(true)).removeClass('on_stealth').animate({'top':0},700,'easeOutExpo');
});
$j('#info-close').click(function(){
	$j('#info-close').fadeOut(2);
	$j('.focus').fadeOut(700);
	$j('.container aside').stop().animate({'top':-$j('aside').outerHeight(true)},700,'easeOutExpo');
	setTimeout(function(){
		$j('.container #content').stop().animate({'top':-$j('#content').outerHeight(true)},700,'easeOutExpo',function(){$j('.container').css('display','none');});
		$j('#thumb-tray-container').animate({'bottom':'0'},300);
	}, 100);
	//$j('.container').animate({'top':-$j('.container').outerHeight(true)},300,function(){$j(this).addClass('on_stealth')});
	
});
	
/* slide-all + slide-back buttons */
$j('.slideall').click(function(){
	$j('.sec_left').animate({'left':-$j('.sec_left').outerWidth()},200);
	$j('#thumb-tray-container').animate({'bottom':'0', 'left':'62'},200);
	$j('#thumb-tray').css('width',$j(window).width()-63);
	
	$j('#info-close').fadeOut(2);
	$j('.container aside').stop().animate({'top':-$j('aside').outerHeight(true)},700,'easeOutExpo');
	setTimeout(function(){
		$j('.container #content').stop().animate({'top':-$j('#content').outerHeight(true)},700,'easeOutExpo',function(){$j('.container').css('display','none');});
	}, 200);
	
	$j('.geopin,#nextslide,#prevslide,#pauseplay').fadeOut(2,function(){
		$j('.slideall').fadeOut(2,function(){
			$j('.slideall-back').fadeIn(2).css('display','inline-block');
		});
		$j('#controls-wrapper').stop().animate({'width':'60'},200,'easeOutExpo');
	});
});
$j('.slideall-back').click(function(){
	$j('.sec_left').animate({'left':'0'},200);
	$j('#thumb-tray-container').animate({'bottom':'0', 'left':'200'},200);
	$j('#thumb-tray').css('width',$j(window).width()-263);
	
	$j('.slideall-back').css('display','none');
	$j('#controls-wrapper').stop().animate({'width':'198'},200,'easeOutExpo',function(){
		$j('.geopin,#nextslide,#prevslide,#pauseplay,#view-info,.slideall').fadeIn(2);
	});
});

/* hover on article on Gallery listing pages */
$j('.gallery-archive article').hover(function(){
	$j(this).find('.info-card').stop().fadeIn(300);
},function(){
	$j(this).find('.info-card').stop().fadeOut(300);
});

/* hover on image links on Gallery single pages */
if(isIOS){
	$j('#content-thumbs ul li a').on('click touchstart', function(e) {
	   $j(this).find('span').show();
	});
	$j('#content-thumbs ul li a').on('click touchend', function(e) {
	   $j(this).find('span').hide();
	});
} else {
	$j('#content-thumbs ul li a').hover(function(){
		$j(this).find('span').stop().fadeIn(200);
	},function(){
		$j(this).find('span').stop().fadeOut(200);
	});
}


/* fullscreen button on attachment pages */
$j('#go-fullscreen').click(function(){
	if ($j(this).hasClass('fullscreen-off')) { 
    	toggleFullscreen();
    	$j(this).addClass('fullscreen-on').removeClass('fullscreen-off');
	}
	else {
    	toggleFullscreen();
    	$j(this).addClass('fullscreen-off').removeClass('fullscreen-on');
	}
});
	
/* alert-boxes */
$j(".alert-box").delegate("a.close", "click", function(event) {
event.preventDefault();
  $j(this).closest(".alert-box").fadeOut(function(event){
    $j(this).remove();
  });
});


/* ============================================================================================================
/*	WINDOW RESIZE
/* ============================================================================================================ */	
	
/* window resize */
$j(window).resize(function() {
	$j('.sec_left').css('height',$j(window).height()-73);
	$j('#thumb-tray').css('width',$j(window).width()-263);
		$j('.attachment #thumb-tray-container').css({'width':$j(window).width()-357});
		$j('.attachment #thumb-tray-container > #thumb-tray').css({'width':$j(window).width()-377,'left':'10px'});
	$j('#geomap').css('height',$j(window).height());
	$j('.single-attachment #content').css({'width':$j(window).width()-252, 'height':$j(window).height()}); //252 - To incorporate the right sidebar
	$j('#single-attachment').css('height',$j(window).height()-220);
	$j('.single-attachment h1').css('width',$j('#single-attachment img').outerWidth());
	
	if ($j(window).width()<=974) {
		$j('.gallery-archive article.vt_ox_gallery:nth-child(3n+3)').removeClass('no_margin');
	}
});

}); // document.ready() function ends


/* ============================================================================================================
/*	FUNCTIONS
/* ============================================================================================================ */

/* toggle fullscreen */
function toggleFullscreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    // alternative standard method
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {               // current working methods
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
    $j('#go-fullscreen').addClass('fullscreen-off').removeClass('fullscreen-on');
  }
  else {
	if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
    $j('#go-fullscreen').addClass('fullscreen-on').removeClass('fullscreen-off');
  } 
}



/* ------------------------------------------------------------------------------------------------------------
/*	authored by Verve Themes
/* ------------------------------------------------------------------------------------------------------------ */