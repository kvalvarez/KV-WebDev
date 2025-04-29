$(window).on("load",function(){
    
    //////// SLIDESHOW ///////////
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;
    
     
    function slideShow(){
        console.log(slideIndex)
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }
        else {
            slideIndex++;
        }
        setTimeout(slideShow,5000);
    }
    slideShow();
})

///// NAV TOGGLE /////
$(".hamburger-btn").click(function(){
    $(".header .nav").slideToggle();
})
$(".header .nav a").click(function(){
    if($(window).width() < 768){
        $(".header .nav").slideToggle();
    }
})

////// FIXED HEADER SECTION //////
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $(".header").addClass("fixed");
    }
    else {
        $(".header").removeClass("fixed");
    }
})

// SCROLLIT
$.scrollIt({
    topOffset: -50
});


   
