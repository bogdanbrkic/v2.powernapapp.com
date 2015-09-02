/* =======================================
 * Init js
 * =======================================
 */
 ;
 console.log('Hello visitor & wellcome to powenap app.');
 console.log('---');
 console.log('made by afterwork team @ afterworkspace.com');


/* =======================================
 *  Resize Video Background
 * =======================================
 */
 var resizeVideoBackground = function() {

  $('.video-background').each(function(i, el) {
    var $el = $(el),
    $section = $el.parent(),
    min_w = 300,
    video_w = 16,
    video_h = 10,
    section_w = $section.outerWidth(),
    section_h = $section.outerHeight(),
    scale_w = section_w / video_w,
    scale_h = section_h / video_h,
    scale = scale_w > scale_h ? scale_w : scale_h,
    new_video_w, new_video_h, offet_top, offet_left;

    if (scale * video_w < min_w) {
      scale = min_w / video_w;
    };

    new_video_w = scale * video_w;
    new_video_h = scale * video_h;
    offet_left = (new_video_w - section_w) / 2 * -1;
    offet_top = (new_video_h - section_h) / 2 * -1;

    $el.css('width', new_video_w);
    $el.css('height', new_video_h);
    $el.css('marginTop', offet_top);
    $el.css('marginLeft', offet_left);
  });

};

/* =======================================
 * Resize Video Background
 * =======================================
 */
 $(window).on('resize', function() {
  resizeVideoBackground();
});

 /* =======================================
 * On win load
 * =======================================
 */
$(window).load(function() {

  console.log('window loaded..');

  //$( '#preloader' ).fadeOut( 1000, function() {
    $( 'body' ).addClass( 'preloader-done' );
    $( '.hp__intro' ).css( "display", "block" );
    resizeVideoBackground();
    //remove AW
    $( '#preloader' ).addClass( 'start-opacity' );
  //});

});
