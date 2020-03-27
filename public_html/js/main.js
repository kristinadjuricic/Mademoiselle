$(document).ready(function () {

    function checkHeader() {
        let headerHeight = $('header').innerHeight();
        $('main').css('margin-top', headerHeight);
    }

    checkHeader();
    $(window).resize(function () {
        checkHeader();
    });

    function animation() {
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animation = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');
            if (position < scroll + windowHeight - 100) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animation);
            }
        });
    }
    animation();
    $(window).scroll(function () {
        animation();
        animateHeader();
    });
    
    if($('.team-slider').length > 0){
        $('.team-slider').owlCarousel({
            autoplay: true,
            loop:true,
            
            responsive:{
                0:{
                    items: 1
                }
            }
        });
    }

});

