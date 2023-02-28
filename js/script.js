$(document).ready(function(){
  
    $('.navbar-toggler').click(function(){

        $('.navbar-toggler').toggleClass('change')

    })


    $('.carousel').carousel({
      interval: 3000
    })

    $(window).scroll(function(){

        let position = $(this).scrollTop();
        console.log(position);
        if(position >= 718){
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        }
        else{
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
    })

    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  $(window).scroll(function(){

    let position = $(this).scrollTop();

    if(position >= 718){
        $('#back-to-top').addClass('scrollTop');
    }
    else{
        $('#back-to-top').removeClass('scrollTop');
    }
})



  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',

    gallery:{
        enabled: true
    }
    // other options
  });

});