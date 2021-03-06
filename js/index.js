(function ($) {
    $(document).ready(function () {
        $(".text-rotate-faq").rotator();
        $(".text-rotate-reply").rotator();
        var slider_2 = new MasterSlider();
        slider_2.setup('userscomments', {
            autoplay: true,
            mouse: false,
            loop: true,
            width: 180,
            autoHeight: true,
            speed: 15,
            view: 'fadeBasic',
            preload: 0,
            space: 90
        });
        slider_2.control('slideinfo', {insertTo: '#staff-info'});
        $("#locales").owlCarousel({
            itemsCustom: [[0, 1], [1180, 4],],
            navigation: false,
            pagination: true,
            autoPlay: true,
        });
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            $(".ios-sys").addClass("display-bk");
            $(".android-sys").addClass("display-null");
            $(".neutro-sys").addClass("display-null");
        }
        if (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $(".android-sys").addClass("display-bk");
            $(".ios-sys").addClass("display-null");
            $(".neutro-sys").addClass("display-null");
        }
    });
})(jQuery);
