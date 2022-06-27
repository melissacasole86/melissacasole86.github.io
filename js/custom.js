'use strict'

// $(document).ready(function(){
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
    
    $('li a').click(function(event){
        var bar = $('.bar');
        var liPos = $(this).offset().top;
        event.preventDefault();
        $(bar).offset({top:liPos});

        $(this).addClass('active').closest('nav').find('.active').not(this).removeClass('active');
    });

    // animate nav to close/open

    $('.anchor').click(function(){
        $(this).toggleClass('rotate180');
        $('nav').toggleClass('closed');
    });
    
});






