'use strict'

$(document).ready(function () {
    //     // scripts for patterns

    //     $('.btn-primary').click(function(){
    //         var email = $(this).closest('.email');

    //         if($(this).text()=='Select'){
    //             $(this).text('Selected').prepend('<i class="fa fa-check-circle "></i>').addClass('selected')
    //             email.addClass('selected');
    //         } else {
    //             $(this).text('Select').removeClass('selected')
    //             email.removeClass('selected');
    //         }
    //     });



    //scripts for index
    // move bar in main nav to active link

    $('li').click(function (event) {
       
        // var url = $(this).find('a').attr('href');
        var bar = $('.bar');
        var liPos = $(this).offset().top;
        $(bar).offset({
            top: liPos
        });

        $(this).addClass('active').closest('nav').find('.active').not(this).removeClass('active');
        event.preventDefault();
    });

    // animate nav to close/open

    $('.anchor').click(function () {
        if ($('main').hasClass('small')) {
            $('main').addClass('full').removeClass('small')
        } else {
            $('main').removeClass('full').addClass('small');
        }

        $(this).toggleClass('rotate180');
        $('nav').toggleClass('closed');
    });

 //animate main content full/small
    // minimize left nav at mobile breakpoint

    $(window).resize(function () {
        if ($(this).width() < 1024) {
            $('.mainNav').addClass('closed')
            $('main').addClass('full').removeClass('small')
            $('.anchor').addClass('rotate180');
        } else {
            $('.mainNav').removeClass('closed')
            $('main').removeClass('full').addClass('small')
            $('.anchor').removelass('rotate180');
        }
    });
});