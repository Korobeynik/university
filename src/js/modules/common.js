jQuery(document).ready(function(){

	var owl = jQuery('.owl-carousel');
    owl.owlCarousel({
        items:3,
        loop:true,
        margin: 30,
        smartSpeed: 500,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                autoplay:false
            },
            600:{
                items:3,
                nav:false,
                autoplay:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });

    jQuery(".ninja-btn").click(function() {
        jQuery(this).toggleClass("active");
        jQuery(".mainMenu").toggleClass('active');
        jQuery(".header__middle nav").toggleClass('active');
        //jQuery("#content").toggleClass("active");
    });

    jQuery('#btn-video').click(function() {
       jQuery('#exampleModalCenter').modal('show');
       console.log("Modal open");
    });

});
