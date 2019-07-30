$(document).ready(function () {

    new Swiper ('.head-content-slider .swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

});


let app = {

    initial: function () {

        // menu function
        this.menuFunc();

    },

    menuFunc: function () {
        $('.hamburger').on('click', function () {
            let $navBlock = $('.header-drop-menu-block');
            $(this).addClass('active');
            $navBlock.fadeIn(250).addClass('active');
        });
        $('.header-drop-menu-block').on('click', function (e) {
            let $th = $(this),
                isOpened = $th.hasClass('active') && !$(e.target).is('.head-nav-list');
            if (isOpened) {
                $('.hamburger').removeClass('active');
                $th.removeClass('active');
                $th.fadeOut(750);
            }
        });
    },

};

(function () {
    app.initial();
})();
