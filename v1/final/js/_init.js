(function($) {

    //on init reset url = so page doesnt jump on hash link
    window.location.hash = "";

    // Setup variables
    $window = $(window);
    $body = $('body');
    $preloader = $('#preloader');
    $nav = $('#skroll-nav-wrapper');
    $introContent = $('#intro-content-holder');
    $preloadingMsg = $('#preloading-msg');

    $body.imagesLoaded(function() {
        setTimeout(function() {
                // Resize sections
                //s.refresh($('.homeSlide'));
                $body.removeClass('body-preload').addClass('body-loaded');
                $nav.removeClass('nav-preload').addClass('nav-loaded');
                $preloadingMsg.addClass('preloadingMsg-loaded');
                $introContent.addClass('intro-content-animate');
                $preloader.removeClass('loading').addClass('loaded');
            }, 1800,

            console.log('all images are loaded'));
    });

    var s = skrollr.init({
        //edgeStrategy: 'set',
        //forceHeight: false,
        easing: {
            // WTF: Math.random,
            // inverted: function(p) {
            //   return 1-p;  
            // }
        },
        //smooth anim
        smoothScroll: false,
        smoothScrollingDuration: 1200,
        //starting Ypos points for slides-1, .. 
        constants: {
            slide1: 1000,
            slide2: 2000,
            slide3: 6000,
            slide4: 7000,
            slide5: 9000,
            slide6: 11000,
            slide7: 12000,
            slide8: 14000,
            slide9: 15000,
            slide10: 16000,
            slide11: 17000,
            footer: 19000,
            rubiqbox1: 1000
        },

        render: function(data) {
            //Debugging - Log the current scroll position.
            console.log(data.curTop);
        }
    });

    //The options (second parameter) are all optional. The values shown are the default values.
    skrollr.menu.init(s, {
        //skrollr will smoothly animate to the new position using `animateTo`.
        animate: true,

        //The easing function to use.
        easing: 'sqrt',

        //Multiply your data-[offset] values so they match those set in skrollr.init
        //scale: 1,

        //How long the animation should take in ms.
        duration: function(currentTop, targetTop) {
            //By default, the duration is hardcoded at 500ms.
            //return 1200;
            //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
            return Math.abs(currentTop - targetTop) * 1.2;
        }
    });

    // get window size
    winH = $window.height();
    console.log(winH);

    //on page load
    $(window).load(function() {

        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            }
        });
        $('.popup-gallery1').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            }
        });

    });

})(jQuery);