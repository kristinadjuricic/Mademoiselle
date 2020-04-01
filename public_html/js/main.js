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
            if (position < scroll + windowHeight - 80) {
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
            items: 1,
            autoplay: true,
            loop:true
        });
    }
    
        if ($('.contact-form').length > 0) {

        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                     subject: {
                        required: true
                    },
                    yourMessage: {
                        required: true
                    }

                },
                messages: {

                    name: {
                        required: 'Please provide your name.'
                    },
                    email: {
                        required: 'The Email is required field.',
                        email: 'Please provide a valid Email address.'
                    },
                    subject: {
                        required: 'The Subject is required field.'
                    },
                    yourMessage: {
                        required: 'Your message is required field.'
                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });
    }

});

