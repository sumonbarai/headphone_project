$(document).ready(function() {
    $(window).scroll(function(){
     let scrollBar =$(window).scrollTop();
       if(scrollBar>200){
           $('.scrolling_icon').fadeIn(1000);
       }else{
        $('.scrolling_icon').fadeOut(1000);
       };

    });

$('.scrolling_icon').click(function(){
    $('html,body').animate({
        'scrollTop':0,
    },2000);
});

});