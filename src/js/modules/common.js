$(window).on('load', function () {
  dotPosition();
  function dotPosition() {
      let windowWidth = $(window).width();
      let containerWidth = $('.jumbotron__content').width();
      let containerWidth2 = $('.museum .container').width();
      let leftPos = (windowWidth-containerWidth)/2;
      let leftPos2 = (windowWidth-containerWidth2)/2;

      $('.jumbotron__slider .owl-nav').css('marginLeft', leftPos);
      $('.museum__slider .owl-nav').css('marginLeft', leftPos2);

    }
 });

$(document).ready(function() {

    $(window).resize(function() {
      dotPosition();
    });
    
    function dotPosition() {
      let windowWidth = $(window).width();
      let containerWidth = $('.jumbotron__content').width();
      let containerWidth2 = $('.museum .container').width();
      let leftPos = (windowWidth-containerWidth)/2;
      let leftPos2 = (windowWidth-containerWidth2)/2;

      $('.jumbotron__slider .owl-nav').css('marginLeft', leftPos);
      $('.museum__slider .owl-nav').css('marginLeft', leftPos2);

    }


    if ($(window).width() < 1024) {
      $(".press__title.title--bold").find('br').remove();
       $('.mainMenu > li').each(function() {
        $(this).children('ul').closest('li').addClass('hasSubMenu');
       });

       $('.hasSubMenu > a span').addClass('arrow');

       $('.hasSubMenu > a').click(function(event) {
           event.preventDefault();
           $(this).next().toggleClass('active');
           $(this).toggleClass('selected');
           $('.arrow').toggleClass('hidden');
       }); 
    }
});


$(document).ready(function(){

    changeImageSrc();

    function changeImageSrc() {
      $(".article-slider img").each( function() {
        let imgSrc = $(this).attr('src');
        $(this).closest('a').attr("href", imgSrc);
      });
    };

    $('.popupModal').magnificPopup();
    
    $('.popup').magnificPopup({
        type: 'image',
        gallery:{
          enabled:true
        }
      });

    $('.gallery').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
          delegate: 'a', // the selector for gallery item
          type: 'image',
          gallery: {
            enabled:true
          }
      });
    });

      //Galerry
    $(".gallery--init").each(function() {
      $(this).magnificPopup({
        delegate: 'a',
        mainClass: 'mfp-zoom-in',
        type: 'image',
        tLoading: '',
        gallery:{
          enabled: true,
        },
        removalDelay: 300,
        callbacks: {
          beforeChange: function() {
            this.items[0].src = this.items[0].src + '?=' + Math.random();
          },
          open: function() {
            $.magnificPopup.instance.next = function() {
              var self = this;
              self.wrap.removeClass('mfp-image-loaded');
              setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
            }
            $.magnificPopup.instance.prev = function() {
              var self = this;
              self.wrap.removeClass('mfp-image-loaded');
              setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
            }
          },
          imageLoadComplete: function() {
            var self = this;
            setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
          }
        }
      });
    });

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

	var owl = $('.programSlider');
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
        loop: false,
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
                nav:true
            },
            1200:{
                items:3
            }
        }
    });

    $('.jumbotron__text').addClass('animated fadeInUp');

    var owljumbotronSlider = $('.jumbotron__slider');
    owljumbotronSlider.owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'fadeIn',
        items:1,
        loop: true,
        margin: 0,
        smartSpeed: 500,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        autoplayHoverPause:true,
        responsiveClass:true
    }).on('translate.owl.carousel', function() {
       $(this).find('.jumbotron__text').removeClass('animated fadeInUp');
    }).on('translated.owl.carousel', function() {
       $(this).find('.jumbotron__text').addClass('animated fadeInUp');
    });

    var museum__slider = $('.museum__slider');
    museum__slider.owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'fadeIn',
        items:1,
        loop: true,
        margin: 0,
        smartSpeed: 500,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        autoplayHoverPause:true,
        responsiveClass:true
    });

     $('.study__lineament').slick({
        dots: false,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        verticalSwiping: true,
        autoplay: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              vertical: false,
              dots: true
            }
          }
        ]
      });

    $(".ninja-btn").click(function() {
        $(this).toggleClass("active");
        $(".mainMenu").toggleClass('active');
        $(".header__middle nav").toggleClass('active');
    });

    $('#btn-video').click(function() {
       $('#exampleModalCenter').modal('show');
       console.log("Modal open");
       $('body.modal-open').css('padding', 0);
       $("body").removeClass("modal-open");
    });

    $('.asideMenu li.active ul').show();

    $('.asideMenu ul li.active').closest('ul').show();

       $('.asideMenu > li').each(function() {
        $(this).children('ul').closest('li').addClass('hasSubMenu');
       });

    $('.asideMenu > li.hasSubMenu > a').on('click', function(event) {
      event.preventDefault();
      $('.asideMenu li').removeClass('active');
      $('.asideMenu ul').slideUp();
      $(this).closest('li').addClass('active');
      $(this).closest('li').find('ul').stop().slideToggle();
    });


    $('.faq__item__title').click(function(){
        //$('.faq__item__description').stop().slideToggle();
        $(this).closest('.faq__item').toggleClass('active');
        $(this).closest('.faq__item').find('.faq__item__description').slideToggle();

    });


});
