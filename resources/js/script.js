$(document).ready(function () {
    
    /*  sticky navigation  */
$('.js--section-features').waypoint(function (direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');  }
    else 
{  
        $('nav').removeClass('sticky');
}
    
    
});
    
    
/* scroll on button */
$('.js--scroll-to-plans').click(function () {
   $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);


});
    
$('.js--scroll-to-start').click(function() {
   $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
});
    
    
  
/*navigation scroll*/
   /* 
var waypoint = new Waypoint({
  element: document.getElementById('px-offset-waypoint'),
  handler: function(direction) {
    notify('I am 20px from the top of the window')
  },
  offset: 20 
})
  });
   */
    
    /*  animation on scroll */ 
    
    $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });


    /*   mobile-navi   */
    
    $('.js--nav-icon').click(function() {
     var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon');
     nav.slideToggle(200);
    
    if (icon.hasClass('.js--nav-icon')) {
      icon.addClass('.js--nav-icon');
       icon.removeClass('js--nav-icon');
    }else{

       icon.addClass('.js--nav-icon');
       icon.removeClass('.js--nav-icon');
    }

    });


});








