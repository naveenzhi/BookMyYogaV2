﻿/*!
 * Bake Delights Theme v1.0.1 (http://themes.nopaccelerate.com/themes/bakedelights-nopcommerce-theme/)
 * Copyright 2017 Xcellence-IT.
 * Licensed under http://www.nopaccelerate.com/terms/
 */

/* Using Bake Delights js for Bake Delights Theme */

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
    $('.block .title,.column .title').click(function () {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        var result = { width: e[a + 'Width'], height: e[a + 'Height'] };
        if (result.width < 992) {
            $(this).siblings('.listbox,.nav.nav-list').slideToggle('slow');
            $(this).toggleClass("arrow-up-down");
        }
    });

    //Used js for cart page Collapse
    $('.block .title').click(function () {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        var result = { width: e[a + 'Width'], height: e[a + 'Height'] };
        if (result) {
            $(this).siblings('.detail').slideToggle('slow');
            $(this).toggleClass("arrow-down");
        }
    });

    //Used js for flayout cart
    $("#flyout-cart").live("mouseenter", function () {
        $('#flyout-cart-wrapper').addClass('active');
    });

    $("#flyout-cart").live("mouseleave", function () {
        $('#flyout-cart-wrapper').removeClass('active');
    });

    //Used js for Product Box and Product Thumbs Slider
    $("#home-category-slider,#sub-category-slider,#manufacturer-slider").owlCarousel({
        items: 3,
        itemsCustom: false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 3],
        itemsMobile: [640, 1],
        itemsScaleUp: true,
        autoPlay: false,
        responsive: true,
        navigation: true,
    });
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
    });
    $("#crosssell-products-slider,#home-bestseller-slider,#home-features-slider,#related-products-slider,#also-purchased-products-slider").owlCarousel({
        items: 4,
        itemsCustom: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 3],
        itemsMobile: [640, 1],
        itemsScaleUp: true,
        autoPlay: false,
        responsive: true,
        navigation: true,
    });
    $("#home-news-slider").owlCarousel({
        items: 2,
        itemsCustom: false,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [640, 1],
        itemsScaleUp: true,
        autoPlay: false,
        responsive: true,
        navigation: true,
    });


    /* Used js for BackTop Page Scrolling*/
    (function ($) {
        $.fn.backTop = function (options) {
            var backBtn = this;
            var settings = $.extend({
                'position': 400,
                'speed': 500,
            }, options);

            //Settings
            var position = settings['position'];
            var speed = settings['speed'];
            
            backBtn.css({
                'right': 40,
                'bottom': 40,
                'position': 'fixed',
            });

            $(document).scroll(function () {
                var pos = $(window).scrollTop();
                console.log(pos);

                if (pos >= position) {
                    backBtn.fadeIn(speed);
                } else {
                    backBtn.fadeOut(speed);
                }
            });

            backBtn.click(function () {
                $("html, body").animate({
                    scrollTop: 0
                },
                {
                    duration: 1200
                });
            });
        }
    }(jQuery));

    $('#backTop').backTop({
        'position': 200,
        'speed': 500,
    });

});

//Used js for Product Increase and Decrease Quantity Item
function IncreaseQuantity(e) {
    var id = document.getElementById(e.id).value;
    var qtyValue = parseInt(id);
    qtyValue = qtyValue + 1;
    document.getElementById(e.id).value = qtyValue;
    return true;
}

function DecreaseQuantity(e) {
    var id = document.getElementById(e.id).value;

    if (id <= 0)
        return 0;

    var qtyValue = parseInt(id);
    qtyValue = qtyValue - 1;
    document.getElementById(e.id).value = qtyValue;
    return true;
}

// Used for lines on hover 
window.onload = function () {
    $(".header-menu ul a").click(function (e) {
        var link = $(this);
    }).each(function () {
        var link = $(this);
        if (link.get(0).href === location.href) {
            link.parent('li').addClass('active');
            return false;
        }
    });
};
