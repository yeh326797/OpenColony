var mobileNavbar= $('.mobile-navbar')
var menuBtn= $(".menu-btn")
var mobileMenu= $('.mobile-menu')
var mobileNavBg= $('.nav-bg')

menuBtn.on('click',() => {
    $('.line1').toggleClass('line1-cross');
    $('.line2').toggleClass('line2-cross');
    $('.line3').toggleClass('line3-cross');
});

menuBtn.on('click',() => {
    mobileMenu.toggleClass('active')
    mobileMenu.toggleClass('mobile-menu-show',300)
    $('.mobile-logo-dark').toggleClass('active')
    $('.mobile-logo-white').toggleClass('active')
    mobileNavBg.toggleClass('navbg-dark',300);
    $('.nav-link').toggleClass('move')
})


$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if(scrollTop>50){
    $('header').find('.mobile-navbar').addClass("mobile-navbar-bg");
    }else{
    $(".mobile-navbar-bg").removeClass("mobile-navbar-bg");
    }
    });

    mobileMenu.find('.nav-link').on('click', function () {
        mobileMenu.find('.nav-link').removeClass('mobile-current')
        $(this).addClass('mobile-current')
    })

    $('.navbar-menu').find('.menu-item').on('click', function () {
        $('.navbar-menu').find('.menu-item').removeClass('current')
        $(this).addClass('current')
    })

$('#readmore1').on('click',() =>{
    $('#readmore1').css('display','none')
    $('#articlemore1').fadeIn('slow')
    $('#articlemore1').removeClass('active')
});

$('#readmore2').on('click',() =>{
    $('#readmore2').css('display','none')
    $('#articlemore2').fadeIn('slow')
    $('#articlemore2').removeClass('active')
});

$('#readmore3').on('click',() =>{
    $('#readmore3').css('display','none')
    $('#articlemore3').fadeIn('slow')
    $('#articlemore3').removeClass('active')
})