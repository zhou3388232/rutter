(function ($) {
    $(function () {
        $('.bxslider').bxSlider({
            auto: false,
            autoHover: true
        });

        $('.nav-toggle a').on('click',function(){
            $('.nav-toggle a').toggleClass('active');
            $('body').toggleClass('open');
            $('nav').toggleClass('open');
            return false;
        });

        $('.search-toggle a').on('click',function(){
            $('.search-toggle a').toggleClass('active');
            $('.title-message .search').toggleClass('active');
            return false;
        });

        if ($(window).width()<959) {
            $('<div class="open-submenu"></div>').insertBefore('nav .sub-menu');
            $('.open-submenu').on('click',function(){
                $('nav .sub-menu').removeClass('open');
                $('.open-submenu').not($(this)).removeClass('active');
                $(this).toggleClass('active');
                if ($(this).hasClass('active')) {
                    $(this).parent().find('.sub-menu').addClass('open');
                };
            });

        };

    })
})(jQuery)
