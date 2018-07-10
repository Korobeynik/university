jQuery(document).ready(function(){

    let listArray = jQuery('.news [data-content]');
    let linkCategory = jQuery('#news__menu__link');
    jQuery('[data-tab]').on('click', function(event) {
            event.preventDefault();
            let dataLink = jQuery(this).attr('href');
            linkCategory.attr('href', dataLink);
            let tabActive = jQuery(this).data('tab');
            listArray.each( function(index) {
               if(tabActive == jQuery(this).data('content')){
                   console.log(index);
                     jQuery(this).css({
                         display: 'flex',
                     });
         } else  {
            jQuery(this).css('display', 'none')
         }
      });
            
            jQuery('.news__menu li').removeClass('active');
            jQuery(this).closest('li').addClass('active');
    });

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
                items:2,
                nav:false,
                autoplay:false
            },
            1000:{
                items:2,
                nav:true,
                loop:true
            },
            1200:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });

    var owlArticleSlider = jQuery('.article-slider');
    owlArticleSlider.owlCarousel({
        items:3,
        loop:true,
        margin: 20,
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
            },
            1200:{
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
       jQuery('body.modal-open').css('padding', 0);
       jQuery("body").removeClass("modal-open");
    });

    jQuery('.asideMenu li.active ul').show();
    jQuery('.asideMenu > li > a').on('click', function(event) {
        if (jQuery(this).closest('li:has(ul)')) {
            event.preventDefault();
            jQuery('.asideMenu li').removeClass('active');
            jQuery('.asideMenu ul').slideUp();
            jQuery(this).closest('li').addClass('active');
            jQuery(this).closest('li').find('ul').slideDown();
        }
    });

    ///////FAQ//////////////

    $('.faq__item__title').click(function(){
        let faqWrap = $(this).parent();
        let itemFaqActive = faqWrap.hasClass('active');
        $('.faq__item').removeClass('active');
        if(!itemFaqActive){
            faqWrap.addClass('active');
        }
    });


});
