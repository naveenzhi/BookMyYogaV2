/*!
 * nopAccelerate Noble Theme v1.2.0 (http://themes.nopaccelerate.com/themes/nopaccelerate-noble-theme/)
 * Copyright 2017 Xcellence-IT.
 * Licensed under http://www.nopaccelerate.com/terms/
 */

/* Using Noble js for nopAccelerate Noble Theme */

$(document).ready(function () {
    //Used js for Header Sticky Menu  
    //http://www.jqueryscript.net/menu/Sticky-Navigation-Bar-with-jQuery-Bootstrap.html
    $(window).bind('scroll', function() {
        var navHeight = $("div.header").height();
        var navWidth = $("div.header").width();
        ($(window).scrollTop() > navHeight) ? $('.main-menu').addClass('goToTop').width(navWidth) : $('.main-menu').removeClass('goToTop');
    });


    //Used js for Responsive Website Checker
    $('#exit').click(function (e) {
        $('.responsive').hide();
        $('.master-wrapper-page').css('margin-top', '0');
    });


    //Used js for Left Sliderbar Collapse(Responsive Devices)
    $('.block .title').click(function() {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        var result = { width: e[a + 'Width'], height: e[a + 'Height'] };
        if (result.width < 991) {
            $(this).siblings('.listbox').slideToggle('slow');
            $(this).toggleClass("arrow-up-down");
        }
    });


    //Used js for Tooltip 
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip"]').on('shown.bs.tooltip', function() {
        $('.tooltip').addClass('animated swing');
    })


    //Used js for Product Box and Product Thumbs Slider
    $("#home-category-slider,#home-bestseller-slider,#home-features-slider,#related-products-slider,#also-purchased-products-slider,#category-featured-slider,#manufacturer-featured-slider").owlCarousel({
        items: 3,
        itemsCustom: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 3],
        itemsMobile: [640, 1],
        itemsScaleUp: true,
        autoPlay: true,
        responsive: true,
        navigation: true,
    })
    $("#product-slider").owlCarousel({
        items: 3,
        itemsCustom: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 3],
        itemsMobile: [640, 2],
        itemsScaleUp: true,
        autoPlay: true,
        responsive: true,
        navigation: true,
    })
    $("#crosssell-products-slider").owlCarousel({
        items: 4,
        itemsCustom: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 3],
        itemsMobile: [640, 1],
        itemsScaleUp: true,
        autoPlay: true,
        responsive: true,
        navigation: true,
    })
});
