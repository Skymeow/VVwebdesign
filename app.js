$(document).ready(()=>{
  console.log("js is linked");
    var offset = 0;
    offset = $('.navbar').offset().top;
    console.log(offset);

    function scroll(){
        if ($(window).scrollTop() >= offset) {
            $('.navbar').addClass('navbar-fixed-top');
            // $('.content').addClass('menu-padding');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
            // $('.content').removeClass('menu-padding');
        }

    }

    document.onscroll = scroll;
})
