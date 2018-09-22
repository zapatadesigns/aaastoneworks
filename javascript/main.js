/**
    * isMobile
    * responsiveMenu
    * popularflexslider
    * tabs
    * featuredPost 
    * bond_partner_slider
    * testimonialSlide
    * detectViewport
    * progressBar
    * teammember
    * counter
    * teamstype2
    * bondgallery
    * bondblogstyle1
    * googleMap  
    * portfolioIsotope
    * removePreloader
*/

;(function($) {

   'use strict'
    
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var showsearch = function () {
        $('.show-search a').on('click', function(e){
            e.preventDefault();
            $('.search-box').toggleClass('active'); 
        });
        $('.search-box i').on("click", function(e){
            e.preventDefault();
            $('.search-box').removeClass('active');
        })

        $('.search-submit').on("click", function(e){
            e.preventDefault();
        })
    }

    var progressBar = function() {        
        $('.progress-bar').on('on-appear', function() {
            $(this).each(function() {
                var percent = $(this).data('percent');                
                $(this).find('.progress-animate').animate({
                    "width": percent + '%'
                }, $(this).find('.progress-animate').data('duration') );

                
            });
        });
    };

    var bondSearch = function () {
        $(document).on('click', function(e) {   
            var clickID = e.target.id;  
            if ( ( clickID != 's' ) ) {
                $('.search-box').removeClass('active');                
            } 
        });

        $('.search-box').on('click', function(event){
            event.stopPropagation();
        });

        $('.search-form').on('click', function(event){
            event.stopPropagation();
        });        

        $('.search-box').on('click', function () {
            if(!$('.search-box').hasClass( "active" ))
                $('.search-box').addClass('active');
            else
                $('.search-box').removeClass('active');
        });
    }

    var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    $('#mainnav').hide();
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('#header').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
          
        });

        $('.btn-menu').on('click', function() {         
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    }

    var headerFixed = function() {
        if ( $('body').hasClass('header_sticky') ) {
            var nav = $('.header');

            if ( nav.size() != 0 ) {
                var offsetTop = $('.header').offset().top,
                    headerHeight = $('.header').height(),
                    injectSpace = $('<div />', { height: headerHeight }).insertAfter(nav);   
                    injectSpace.hide();                 

                $(window).on('load scroll', function(){
                    if ( $(window).scrollTop() > offsetTop + 120 ) {
                        $('.header').addClass('header-fix');
                        injectSpace.show();
                    } else {
                        $('.header').removeClass('header-small header-fix');
                        injectSpace.hide();
                    }
                })
            }
        }     
    };
    
    var featuredPost = function() {
        $('.widget.widget-featured-post').each(function() { 
            if ( $().owlCarousel ) {
                $(this).find('.widg-featured-post').owlCarousel({
                    loop: true,
                    nav: true,
                    dots: false,
                    margin: 0,                     
                    autoplay: $('.bond-team-carosuel').data('auto'),                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 1
                        },
                        991:{
                            items: 1
                        },
                        1200: {
                            items: 1
                        }
                    }
                });
            }
        });
    };

    var bond_partner_slider = function() {
        $('.bond-partner-slider .slides').owlCarousel({
                nav: true,
                dots: false,
                margin: 20,  
                items: 6, 
                loop: true,
                autoplay: true,
                navigationText:  ["prev","next"],
                responsive:{
                        0:{
                            items: 1
                        },
                        480:{
                            items: 3
                        },
                        767:{
                            items: 4
                        },
                        991:{
                            items: 5
                        },
                        1200: {
                            items: 6
                        }
                    },
                onInitialized: function() {
                   $(".bond-partner-slider .owl-nav").appendTo($(".bond-partner-slider"));                   
                }
        });
    }

    var parallax = function() {
        if ( $().parallax && isMobile.any() == null ) {
            $('.parallax1').parallax("50%", 0.3);
            $('.parallax2').parallax("50%", 0.3);  
            $('.parallax3').parallax("50%", 0.3);
            $('.parallax4').parallax("50%", 0.6); 
            $('.parallax5').parallax("50%", 0.3);
            $('.parallax6').parallax("50%", 0.3);  
            $('.parallax7').parallax("50%", 0.3);
            $('.parallax9').parallax("50%", 0.3);
            $('.parallax11').parallax("50%", 0.3);
            $('.parallax12').parallax("50%", 0.3);
            $('.parallax13').parallax("50%", 0.6);
            $('.parallax14').parallax("50%", 0.3);
            $('.parallax15').parallax("50%", 0.3);
            $('.parallax16').parallax("50%", 0.3);
        }
    };

    var testimonialSlide = function() {
      
        $('.bond-testimonials-flexslider').each( function(){
            if ($(window).width() > 490) {
                var sliderPerView = $(this).attr("data-slides_per_view");
            }
            else {
                sliderPerView = 1;
            }
            var myswiper = $(this).swiper({
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                slidesPerView: sliderPerView,
                onSlideChangeEnd: function(swiper){
                    var bthumb = $(".bond-testimonials-slider .nav-thumb li");
                    bthumb.removeClass("active");
                    if (swiper.activeIndex > bthumb.length) {
                       var  bindex = swiper.activeIndex - bthumb.length -1;
                    }
                    else {
                        bindex = swiper.activeIndex-1;
                    }
                    bthumb.eq(bindex).addClass("active");
                },
                loop: true,
            }); 
        });/* each */

        $(".bond-testimonials-slider.v2 .nav-thumb li").on("click", function(){
            myswiper.slideTo($(this).index() +1 );
            alert("click");
        })    
    }

    var detectViewport = function() {
        $('[data-waypoint-active="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '90%', triggerOnce: true });
    };

    var sectionVideo = function () {
        if($().YTPlayer) {
            $(".video-section").YTPlayer( {
                showControls: false,
                autoPlay: false
            }); 
            var v = $('.video-section');
            $('#video-controls a')
            .each(function() {
                var t = $(this);
                t.on('click', (function(e) {
                    e.preventDefault();  
                    if (t.hasClass('fa-play')) {
                        t.removeClass('fa-play')
                            .addClass(
                                'fa-pause');
                        v.playYTP();
                        return false
                    }                  
                    if (t.hasClass('fa-pause')) {
                        t.removeClass(
                                'fa-pause')
                            .addClass('fa-play');
                        v.pauseYTP();
                        return false
                    }  
                    if (t.hasClass('fa-play-circle')) {
                        t.removeClass('fa-play-circle')
                            .addClass(
                                'fa-pause-circle');
                        v.playYTP();
                        return false
                    }  
                    if (t.hasClass('fa-pause-circle')) {
                        t.removeClass(
                                'fa-pause-circle')
                            .addClass('fa-play-circle');
                        v.pauseYTP();
                        return false
                    }                        
                }));
            });
        }
    }

    var teammember = function() {
        $('.bond-team-carosuel').each(function(){
            if ( $().owlCarousel ) {
                $(this).find('.owl-stage-outer').owlCarousel({
                    loop: true,
                    nav: false,
                    dots: false,
                    margin: 0,                     
                    autoplay: true,                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 1
                        },
                        991:{
                            items: 1
                        },
                        1200: {
                            items: 1
                        }
                    }
                });
            }
        });
    };

    var counter = function() {
        $('.bond-counter').on('on-appear', function() {
            $(this).find('.numb-count').each(function() {
                var to = parseInt($(this).attr('data-to')), speed = parseInt($(this).attr('data-speed'));
                if ( $().countTo ) {
                    $(this).countTo({
                        to: to,
                        speen: speed
                    });
                }
            });
        }); //counter
    };    

    var teamstype2 = function() {
        $('.bond-team-carosuel-style2').each(function(){
            if ( $().owlCarousel ) {
                $(this).find('.owl-stage-outer').owlCarousel({
                    loop: true,
                    nav: false,
                    dots: true,
                    margin: 0,                     
                    autoplay: true,                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 1
                        },
                        991:{
                            items: 1
                        },
                        1200: {
                            items: 1
                        }
                    }
                });
            }
        });
    };

    var bondgallery = function() {
        $('.bond-gallery-carousel').each(function(){
            if ( $().owlCarousel ) {
                $(this).find('.owl-stage-outer').owlCarousel({
                    loop: true,
                    nav: true,
                    dots: false,
                    margin: 0,                     
                    autoplay: true,                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 2
                        },
                        1200: {
                            items: 3
                        }
                    }
                });
            }
        });
    };

    var bondblogstyle1 = function() {
        $('.bond-blog-carousel.style1').each(function(){
            if ( $().owlCarousel ) {
                $(this).find('.owl-stage-outer').owlCarousel({
                    loop: true,
                    nav: false,
                    dots: true,
                    margin: 0,                  
                    autoplay: true,                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 1
                        },
                        991:{
                            items: 1
                        },
                        1200: {
                            items: 1
                        }
                    }
                });
            }
        });
    };

    var googleMap = function() {
        if ( $().gmap3 ) {
            $("#map").gmap3({
                map:{
                    options:{
                        zoom: 15,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        mapTypeControlOptions: {
                            mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                        },
                        scrollwheel: false
                    }
                },
                getlatlng:{
                    address:  "Emon Pharmacy Corner, Kalachandpur Main Road, Dhaka, Bangladesh",
                    callback: function(results) {
                        if ( !results ) return;
                        $(this).gmap3('get').setCenter(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
                        $(this).gmap3({
                            marker:{
                                latLng:results[0].geometry.location,
                                options:{
                                    icon: 'http://themesflat.com/html/bond/images/icon/marker.png'
                                }
                            }
                        });
                    }
                },
            });
        }
    }; 

    var portfolioIsotope = function() {         
        if ( $().isotope ) {           
            var $container = $('.bond-portfolio');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.item',
                    transitionDuration: '1s'
                });
            });

            $('.portfolio-filter li').on('click',function() {                           
                var selector = $(this).find("a").attr('data-filter');
                $('.portfolio-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });            
        };
    };

    var blog_massory = function() {         
        if ( $().isotope ) {           
            var $container = $('.blog-massory .post-wrap');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: 'article',
                    transitionDuration: '1s'
                });
            });

            $('.portfolio-filter li').on('click',function() {                           
                var selector = $(this).find("a").attr('data-filter');
                $('.portfolio-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });            
        };
    };

    var toggleExtramenu = function() {
        $('.menu.menu-extra span').on('click', function() {
            $('body').toggleClass('off-canvas-active');
        });
        $('#site-off-canvas .close').on('click', function() {
            $('body').removeClass('off-canvas-active');
        });
    }


    var goTop = function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 800 ) {
                $('.go-top').addClass('show');
            } else {
                $('.go-top').removeClass('show');
            }
        }); 
      
        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });
    };

    var ajaxContactForm = function() {  
        $('#contactform').each(function() {
            $(this).validate({
                submitHandler: function( form ) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $('<div />', { 'class': 'loading' });

                    $.ajax({
                        type: "POST",
                        url:  $form.attr('action'),
                        data: str,
                        beforeSend: function () {
                            $form.find('.form-submit').append(loading);
                        },
                        success: function( msg ) {
                            var result, cls;                            
                            if ( msg == 'Success' ) {                                
                                result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                                cls = 'msg-success';
                            } else {
                                result = 'Error sending email.';
                                cls = 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text' : result
                                }).append(
                                    $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                )
                            );

                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function (xhr, status, error_thrown) {
                            $form.find('.loading').remove();
                        }
                    });
                }
            });
        }); // each contactform
    };

    var alertBox = function() {
        $(document).on('click', '.close', function(e) {
            $(this).closest('.flat-alert').remove();
            e.preventDefault();
            return false;
        })     
    }  

    var removePreloader = function() {
        $('.loading-overlay').fadeOut('slow',function () {
            $(this).remove();
        });
    };

   	// Dom Ready
	$(function() {
        if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {
            headerFixed();
        }   
        showsearch();   
        responsiveMenu();
        goTop();
        portfolioIsotope(); 
        blog_massory();
        detectViewport();
        sectionVideo();
        bond_partner_slider();  
        parallax();   
        testimonialSlide();
        featuredPost();
        teammember();
        counter();
        teamstype2();
        bondgallery();
        bondblogstyle1();
        googleMap();
        progressBar(); 
        bondSearch();  
        toggleExtramenu(); 
        ajaxContactForm();  
        alertBox();   
        removePreloader();        
   	});

})(jQuery);