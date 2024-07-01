$(document).ready(function() {

    //menu active class toggle
    $(".nav-item").click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })

    //scroll to top
    $(".goTop").click(function() {
        $('html, body').animate({
            scrollTop: parseInt($("body").offset().top)
        })
    })
    //scroll top show hide
    $(window).scroll(function(){
        if($(this).scrollTop() > 300) {
            $('.goTop').fadeIn();
        }else{
            $('.goTop').fadeOut();
        }
    });

    //hash link disable
    $('a[href^="#"]').click(function(e){
        e.preventDefault();
        var target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });



})