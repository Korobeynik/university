$(document).ready(function() {
    if ($(window).width() < 1024) {

       $('.mainMenu > li').each(function() {
        $(this).children('ul').closest('li').addClass('hasSubMenu');
       });

       $('.hasSubMenu > a span').addClass('arrow');

       $('.hasSubMenu > a').click(function(event) {
           event.preventDefault();
           $(this).next().toggleClass('active');
           $(this).toggleClass('selected');
           $('.arrow').toggleClass('hidden');
           // $('.mainMenu > li').slideUp(300);
           // $(this).closest('li').toggleClass('on');
       }); 
      // $('.elementor-nav-menu .elementor-item').on('click', function(){
      //   $('.elementor-menu-toggle').toggleClass('elementor-active');
      // });
    }
});


$(document).ready(function(){

    let listArray = $('.news [data-content]');
    let linkCategory = $('#news__menu__link');
    $('[data-tab]').on('click', function(event) {
            event.preventDefault();
            let dataLink = $(this).attr('href');
            linkCategory.attr('href', dataLink);
            let tabActive = $(this).data('tab');
            listArray.each( function(index) {
               if(tabActive == $(this).data('content')){
                   console.log(index);
                     $(this).css({
                         display: 'flex',
                     });
         } else  {
            $(this).css('display', 'none')
         }
      });
            
            $('.news__menu li').removeClass('active');
            $(this).closest('li').addClass('active');
    });

	var owl = $('.owl-carousel');
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

    var owlArticleSlider = $('.article-slider');
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

    $(".ninja-btn").click(function() {
        $(this).toggleClass("active");
        $(".mainMenu").toggleClass('active');
        $(".header__middle nav").toggleClass('active');
        //$("#content").toggleClass("active");
    });

    $('#btn-video').click(function() {
       $('#exampleModalCenter').modal('show');
       console.log("Modal open");
       $('body.modal-open').css('padding', 0);
       $("body").removeClass("modal-open");
    });

    $('.asideMenu li.active ul').show();

       $('.asideMenu > li').each(function() {
        $(this).children('ul').closest('li').addClass('hasSubMenu');
       });

    $('.asideMenu > li.hasSubMenu > a').on('click', function(event) {

            event.preventDefault();
 
            $('.asideMenu li').removeClass('active');
            $('.asideMenu ul').slideUp();
            $(this).closest('li').addClass('active');
            $(this).closest('li').find('ul').stop().slideToggle();
            //$(this).closest('li').find('ul').stop();
  
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
