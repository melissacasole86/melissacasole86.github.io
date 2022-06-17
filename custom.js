'use strict'
//gsap

$(document).ready(function(){
    $('.btn-primary').click(function(){
        var email = $(this).closest('.email');

        if($(this).text()=='Select'){
            $(this).text('Selected').prepend('<i class="fa fa-check-circle "></i>').addClass('selected')
            email.addClass('selected');
        } else {
            $(this).text('Select').removeClass('selected')
            email.removeClass('selected');
        }
    });
});


