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
            let $navList = $('.header-drop-menu-block');
            $(this).parent().toggleClass('active');
            if (!$navList.hasClass('active')) {
                $navList.addClass('active').removeClass('hidden');
            } else {
                $navList.removeClass('active');
                setTimeout(function () {
                    $navList.addClass('hidden');
                }, 450);
            }
        });

        $('.head-nav-list').on('click', function () {

        });
    },

};

(function () {
    app.initial();
})();
