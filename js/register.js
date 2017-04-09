(function($) {
  $(document).ready(function() {
    /*----- slider top ---------*/
    var slider = new MasterSlider();
    slider.setup('images-local', {
      width: 1300,
      height: 800,
      view: 'fade',
      fullwidth: true,
      fullheight: true,
      speed: 20,
      autoplay: true,
      mouse: false,
      swipe: false,
      overPause: false,
      shuffle: true,
    });


    $( "#images-local" ).clone().appendTo( ".cont-phones" ).attr("id","phones").after(function() {
      var slider = new MasterSlider();
      slider.setup('phones', {
        width: 500,
        height: 400,
        view: 'fade',
        fullwidth: false,
        fullheight: false,
        speed: 20,
        autoplay: true,
        mouse: false,
        swipe: false,
        overPause: false,
        shuffle: true,
      });
    });

    /*----- Comentarios usuarios ---------*/
    var slider_2 = new MasterSlider();
    slider_2.setup('userscomments', {
      autoplay: true,
      mouse: false,
      loop: true,
      width: 164,
      autoHeight: true,
      speed: 15,
      view: 'fadeBasic',
      preload: 0,
      space: 90,
      overPause: false,
    });

    slider_2.control('slideinfo', {
      insertTo: '#staff-info'
    });


    /*----- Locales -------*/
    $(".locales-crsl").owlCarousel({
      itemsCustom: [
        [0, 1],
        [1020, 3],
      ],
      navigation: false,
      pagination: false,
      autoPlay: true,
    });

    $(".locales-crsl .owl-item").clone().prependTo(".contgocales");

    var validateSettings = {
      debug: true,
      errorClass: 'error',
      submitHandler: function(form) {
        form = $(form);
        if (form.hasClass('formtry')) {
          form.children('button').hide();
          form.children('.boxmens-green').removeClass('hide');
        } else {
          form.hide();
          $('.contg-tryform .boxmens-white').show();
        }
      }
    };

    $('.contg-tryform form').validate(validateSettings);
    $('.formtry').validate(validateSettings);
  });
})(jQuery);
