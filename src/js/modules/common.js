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
        autoplayHoverPause:true
    });

});
