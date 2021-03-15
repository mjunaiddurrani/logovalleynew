$('.eggoffer').click(function() {
    $('.mypopup-wrap').toggle();
    $('.overlay').toggle();
});

$('.closebutton').click(function() {
    $('.mypopup-wrap').hide();
    $('.overlay').hide();
});


new WOW().init();
$(document).scroll(function() {
    "use strict";
    var y = $(this).scrollTop();
    if (y > 200) { $('.sticky-container').fadeIn(); } else { $('.sticky-container').fadeOut(); }
    if (y >= 70) { $(".header-main").addClass("fixed"); } else { $(".header-main").removeClass("fixed"); }
});
$(document).ready(function() {
    "use strict";
    $(document).on("change", ".product-packages .switchbtn input", function() {
        if ($(this).is(":checked")) { $(this).closest(".product-packages").find(".productpack.second-pack").slideToggle();
            $(this).closest(".product-packages").find(".productpackbtn.second").slideToggle();
            $(this).closest(".product-packages").find(".productpack.first-pack").slideToggle();
            $(this).closest(".product-packages").find(".productpackbtn.first").slideToggle(); } else { $(this).closest(".product-packages").find(".productpack.first-pack").slideToggle();
            $(this).closest(".product-packages").find(".productpack.second-pack").slideToggle();
            $(this).closest(".product-packages").find(".productpackbtn.first").slideToggle();
            $(this).closest(".product-packages").find(".productpackbtn.second").slideToggle(); }
    });
    var str = location.href.toLowerCase();
    $(".nav-area-full a").each(function() { if (str.indexOf(this.href.toLowerCase()) > -1) { $(".active").removeClass("active");
            $(this).parent().addClass("active"); } });
    $('.mobile-nav-btn').click(function() { $('.mobile-nav-btn, .mobile-nav, .app-container').toggleClass('active'); });
    $('.firstlevel li a').click(function() { if ($(this).hasClass('active')) { $(this).removeClass('active');
            $(this).siblings('ul').slideUp(); } else { $('.firstlevel li a').removeClass('active');
            $(this).addClass('active');
            $('.dropdown').slideUp();
            $(this).siblings('ul').slideDown(); } });
    $('.mainnav > li > a').click(function() { if ($(this).hasClass('active')) { $(this).removeClass('active');
            $(this).parents('li').children('.firstlevel').slideUp(); } else { $(this).addClass('active');
            $(this).parents('li').children('.firstlevel').slideDown();
            $(this).parents('li').siblings('li').children('a').removeClass('active');
            $(this).parents('li').siblings('li').children('.firstlevel').slideUp(); } });
    $(".cs-slider").slick({ dots: false, arrows: false, infinite: true, speed: 1000, slidesToShow: 1, autoplay: true, autoplaySpeed: 4000, adaptiveHeight: true });
    $(".partnerslider").slick({ dots: false, arrows: false, infinite: true, speed: 1000, slidesToShow: 5, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2000, adaptiveHeight: true });
    $(".home-slider").slick({ dots: true, arrows: true, infinite: !0, speed: 1000, slidesToShow: 1, autoplay: !0, autoplaySpeed: 4000, adaptiveHeight: !0, responsive: [{ breakpoint: 767, settings: { dots: true, arrows: false, slidesToShow: 1, slidesToScroll: 1 } }] });
    var time = 4;
    var $bar, $slick, isPause, tick, percentTime;
    $slick = $('.home-slider');
    $bar = $('.slider-progress .progress');
    $('.slider-wrapper').on({ mouseenter: function() { isPause = true; }, mouseleave: function() { isPause = false; } });

    function startProgressbar() { resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10); }

    function interval() {
        if (isPause === false) {
            percentTime += 1 / (time + 0.1);
            $bar.css({ width: percentTime + "%" });
            if (percentTime >= 100) { $slick.slick('slickNext');
                startProgressbar(); }
        }
    }

    function resetProgressbar() { $bar.css({ width: 0 + '%' });
        clearTimeout(tick); }
    startProgressbar();
    var slickOpts = { dots: true, arrows: true, infinite: !0, speed: 1000, slidesToShow: 1, autoplay: !0, autoplaySpeed: 4000, adaptiveHeight: !0, prevArrow: $('.prev-btn'), nextArrow: $('.next-btn'), customPaging: function(slick, index) { return '<a> 0' + (index + 1) + '</a>'; } };
    $('.number-slider').slick(slickOpts);
    $(".sliderxs").slick({ arrows: false, dots: true, autoplay: true, adaptiveHeight: true, responsive: [{ breakpoint: 10000, settings: "unslick" }, { breakpoint: 767, settings: { unslick: true } }] });
    $(".package-slider").slick({ dots: false, arrows: true, infinite: false, speed: 600, slidesToShow: 3, slidesToScroll: 1, responsive: [{ breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }] });
    $(".testimonials-slider-mains").slick({ dots: false, arrows: true, infinite: true, slidesToShow: 3, slidesToScroll: 1, speed: 500, autoplay: true, autoplaySpeed: 2000, });
    var respsliders = { 1: { slider: '.packslider' }, 2: { slider: '.boxwrap' } };
    $.each(respsliders, function() { $(this.slider).slick({ arrows: false, dots: false, autoplay: true, settings: "unslick", responsive: [{ breakpoint: 2000, settings: "unslick" }, { breakpoint: 767, settings: { unslick: true } }] }); });
    $(".product-slider-gallery").slick({ dots: false, arrows: false, infinite: true, slidesToShow: 1, slidesToScroll: 1, speed: 800, autoplay: true, autoplaySpeed: 3000, asNavFor: '.product-gallery-nav' });
    $('.product-gallery-nav').slick({ dots: false, arrows: true, slidesToShow: 4, slidesToScroll: 1, speed: 800, autoplay: true, autoplaySpeed: 3000, vertical: true, verticalSwiping: true, focusOnSelect: true, asNavFor: '.product-slider-gallery', responsive: [{ breakpoint: 991, settings: { vertical: false, } }, { breakpoint: 776, settings: { vertical: false, } }, { breakpoint: 480, settings: { vertical: false, slidesToShow: 2, slidesToScroll: 1 } }] });
    $('.thumb-slider').slick({ centerMode: true, centerPadding: '0px', arrows: true, slidesToShow: 3, slidesToScroll: 1, responsive: [{ breakpoint: 768, settings: { arrows: false, dots: false, centerMode: true, centerPadding: '10px', slidesToShow: 3 } }, { breakpoint: 767, settings: { arrows: false, dots: false, centerMode: false, centerPadding: '10px', slidesToShow: 1 } }, { breakpoint: 480, settings: { arrows: false, dots: false, centerMode: true, centerPadding: '10px', slidesToShow: 1 } }] });
    $('.slider-for').slick({ dots: true, arrows: false, infinite: true, speed: 500, slide: 'li', fade: false, cssEase: 'linear', centerMode: true, slidesToShow: 1, variableWidth: true, autoplay: true, autoplaySpeed: 4000, responsive: [{ breakpoint: 800, settings: { arrows: false, centerMode: false, centerPadding: '40px', variableWidth: false, slidesToShow: 1, dots: true }, breakpoint: 1200, settings: { arrows: false, centerMode: false, centerPadding: '40px', variableWidth: false, slidesToShow: 1, dots: true } }], customPaging: function(slider, i) { return '<button class="tab">' + $('.thumbsmain li:nth-child(' + (i + 1) + ')').html() + '</button>'; } });
    $(".gallery-slider-main").slick({ dots: false, arrows: false, infinite: true, slidesToShow: 1, slidesToScroll: 1, speed: 1000, autoplay: true, autoplaySpeed: 2000, fade: true, cssEase: 'linear', asNavFor: '.gallery-nav-main' });
    $('.gallery-nav-main').slick({ slidesToShow: 5, slidesToScroll: 1, asNavFor: '.gallery-slider-main', dots: true, focusOnSelect: true });
    $(".bid-slider-gallery").slick({ dots: false, arrows: false, infinite: true, slidesToShow: 1, slidesToScroll: 1, speed: 800, autoplay: true, autoplaySpeed: 3000, asNavFor: '.bid-gallery-nav' });
    $('.bid-gallery-nav').slick({ dots: false, arrows: false, slidesToShow: 5, slidesToScroll: 5, speed: 800, autoplay: true, autoplaySpeed: 3000, vertical: true, focusOnSelect: true, asNavFor: '.bid-slider-gallery', responsive: [{ breakpoint: 767, settings: { vertical: false, } }] });
    $('[data-targetit]').on('click', function() { $(this).siblings().removeClass('current');
        $(this).addClass('current'); var target = $(this).data('targetit');
        $('.' + target).siblings('[class^="tabs"]').removeClass('current');
        $('.' + target).addClass('current'); });

    function getURLParameter(name) { return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null; }
    var val = getURLParameter('pack');
    if (val == '1') { $('#selectcat').val('Start Up Logo Package - £15.99'); }
    if (val == '2') { $('#selectcat').val('Professional Logo Package - £24.99'); }
    if (val == '3') { $('#selectcat').val('Elite Logo Package - £48.99'); }
    if (val == '4') { $('#selectcat').val('Business Logo Package - £99.99'); }
    if (val == '5') { $('#selectcat').val('Silver Logo Package - £119.99'); }
    if (val == '6') { $('#selectcat').val('Gold Logo Package - £199.99'); }
    if (val == '7') { $('#selectcat').val('Illustrative  Logo Package - £109.99'); }
    if (val == '8') { $('#selectcat').val('3D Logo Package - £299.99'); }
    if (val == '9') { $('#selectcat').val('Startup Collateral Packages - £99.00'); }
    if (val == '10') { $('#selectcat').val('Classic Collateral Packages - £199.00'); }
    if (val == '11') { $('#selectcat').val('Premium Collateral Packages - £399.00'); }
    if (val == '12') { $('#selectcat').val('2D Standard Logo Animation - £149.00'); }
    if (val == '13') { $('#selectcat').val('2D Advance Logo Animation Packages - £199.00'); }
    if (val == '14') { $('#selectcat').val('3D Standard Logo Animation Packages - £244.00'); }
    if (val == '15') { $('#selectcat').val('3D Advance Logo Animation - £299.00'); }
    if (val == '16') { $('#selectcat').val('Basic 2D illustration Packages - £195.00'); }
    if (val == '17') { $('#selectcat').val('Standard 2D Illustration - £399.00'); }
    if (val == '18') { $('#selectcat').val('Advance 2D Illustration - £599.00'); }
    if (val == '19') { $('#selectcat').val('Advance Pro 2D Illustration - £799.00'); }
    if (val == '20') { $('#selectcat').val('Premium 2D Illustration - £999.00'); }
    if (val == '21') { $('#selectcat').val('Web Content Packages - 70.00'); }
    if (val == '22') { $('#selectcat').val('Article Writing Packages - £40.00'); }
    if (val == '23') { $('#selectcat').val('Creative Writing Packages - £75.00'); }
    if (val == '24') { $('#selectcat').val('Blog Writing Packages - £40.00'); }
    if (val == '25') { $('#selectcat').val('Infographics Packages - £200.00'); }
    if (val == '26') { $('#selectcat').val('Basic Website Packages - £244.00'); }
    if (val == '27') { $('#selectcat').val('Startup Website Packages - £394.00'); }
    if (val == '28') { $('#selectcat').val('Professional Website Packages - £844.00'); }
    if (val == '29') { $('#selectcat').val('Elite Website Packages - £1,494.00'); }
    if (val == '30') { $('#selectcat').val('Corporate Website Packages - £2,394.00'); }
    if (val == '31') { $('#selectcat').val('Business Website Packages - £2,999.00'); }
    if (val == '32') { $('#selectcat').val('Basic Combo Package - £499.00'); }
    if (val == '33') { $('#selectcat').val('Startup Combo Package - £799.00'); }
    if (val == '34') { $('#selectcat').val('Professional Combo package - £1,199.00'); }
    if (val == '35') { $('#selectcat').val('Corporate Combo Package - £1,599.00'); }
    if (val == '36') { $('#selectcat').val('Elite Combo package - £2,999.00'); }
    if (val == '37') { $('#selectcat').val('Advance Combo Packages - £4,994.00'); }
    if (val == '38') { $('#selectcat').val('Unlimited Collateral Packages - £499.00'); }



    $('.tab-custom .tab-custom-nav a').click(function(event) { $(this).closest('li').siblings('li').children('a').removeClass('current');
        $(this).addClass('current');
        $(this).closest('.tab-custom').children('div.tab-content-panel:not(:hidden)').hide();
        $(this.hash).show();
        event.preventDefault();
        $('.sliderxs').slick('setPosition'); });
    $('.tabs-custom-nav a').click(function(event) { $(this).closest('li').siblings('li').children('a').removeClass('current');
        $(this).addClass('current');
        $(this.hash).closest('.general').children('div.tab-content-panel:not(:hidden)').hide();
        $(this.hash).show();
        event.preventDefault();
        $('.sliderxs').slick('setPosition'); });
    $('.accordion .quest-title.active1').addClass('active');

    function close_accordion_section() { jQuery('.accordion .quest-title').removeClass('active');
        jQuery('.accordion .quest-content').slideUp(300).removeClass('open'); }
    jQuery('.quest-title').click(function(e) {
        var currentAttrValue = jQuery(this).attr('href');
        if (jQuery(e.target).is('.active')) { close_accordion_section(); } else { close_accordion_section();
            jQuery(this).addClass('active');
            jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); }
        e.preventDefault();
    });
    $('[data-fancybox="swf-file"]').fancybox({ iframe: { css: { width: '336px', height: '280px' } } });
    $('[data-fancybox="video-file"]').fancybox({ iframe: { css: { width: '580px', height: '340px' } } });
    let ip;
    let ip_value;
    $("#phone-country,#phone-coun").intlTelInput({ geoIpLookup: function(callback) { $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) { var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
                ip = resp.ip; }); }, initialCountry: "auto", nationalMode: true, separateDialCode: true, });
    setTimeout(function() { console.log(ip);
        $('input[name="pc"]').val($('.selected-dial-code').text());
        $('input[name="cip"]').val(ip);
        console.log(ip);
        $('input[name="ctry"]').val($('.country-list .country.active .country-name').text()); }, 3000);
    setTimeout(function() { $('input[name="pc1"]').val($('.regionform .selected-dial-code').text());
        $('input[name="ctry1"]').val($('.regionform .country-list .country.active .country-name').text()); }, 3000);
    $('body').delegate('.country', 'click', function() { $('input[name="pc"]').val($(this).find('.dial-code').text()); var oldString2 = $('.selected-flag').attr('title').toUpperCase(); var newString12 = oldString2.split(':', 1)[0];
        $('input[name="ctry"]').val(newString12); });
    var $scrolltop = jQuery('.car-top');
    jQuery(window).scroll(function() { if (jQuery(window).scrollTop() >= 200) { $scrolltop.addClass("show");
            $scrolltop.addClass("car-down"); } else { $scrolltop.removeClass("show");
            setTimeout(function() { $scrolltop.removeClass('car-down'); }, 300); } });
    $scrolltop.on('click', function() { jQuery('html,body').animate({ scrollTop: 0 }, 800);
        jQuery(this).addClass("car-run");
        setTimeout(function() { $scrolltop.removeClass('car-run'); }, 1000); return false; });
});
var $gallery = $('.gallery-slider-main');
var slideCount = null;
$gallery.on('init', function(event, slick) { "use strict";
    slideCount = slick.slideCount;
    setSlideCount();
    setCurrentSlideNumber(slick.currentSlide); });
$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide) { "use strict";
    setCurrentSlideNumber(nextSlide); });

function setSlideCount() { "use strict"; var $el = $('.slide-count-wrap').find('.total');
    $el.text(slideCount); }

function setCurrentSlideNumber(currentSlide) { "use strict"; var $el = $('.slide-count-wrap').find('.current');
    $el.text(currentSlide + 1); }
$("#banform").validate({ rules: { username: { required: true, minlength: 2 }, email: { required: true, email: true }, agree: "required" }, messages: { username: { required: "Please enter a username", minlength: "Your username must consist of at least 2 characters" }, email: "Please enter a valid email address" } });
$("#contactForm").validate();
$(function() { "use strict"; var theYear = new Date().getFullYear();
    $('#year').html(theYear); });
$(function() { $.mCustomScrollbar.defaults.theme = "light-1";
    $(".list-scroll").mCustomScrollbar({ scrollButtons: { enable: true }, callbacks: { onTotalScroll: function() { addContent(this) }, onTotalScrollOffset: 100, alwaysTriggerOffsets: false } }); });





$('.testi-slider').slick({
    // centerMode: true,
    // centerPadding: '60px',
    arrows: true,
    slidesToShow: 3,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});



$(".bnr-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    adaptiveHeight: true,


});

////// portfolio tabs 
$('[data-targetit]').on('click', function() {
    $(this).siblings().removeClass('current');
    $(this).addClass('current');
    var target = $(this).data('targetit');
    console.log(target);
    $(".mytabs").removeClass("current");
    $('.' + target).addClass("current");
    $('.pckgslidersec').slick('refresh');
    $('.' + target).siblings('[class^="mytabs"]').removeClass('current');
});
////// tabs end






////// mob slider
$(".pkg-sliders").slick({
    arrows: true,
    dots: false,
    autoplay: false,
    adaptiveHeight: true,
    responsive: [{
            breakpoint: 10000,
            settings: "unslick"
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                unslick: true
            }
        }
    ]
});
////// mob slider end

$(".testimonials-slider-main").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }
    ]
});

////// Portfolio mob slider
$(".port-sliders").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    adaptiveHeight: true,
    responsive: [{
            breakpoint: 10000,
            settings: "unslick"
        },
        {
            breakpoint: 767,
            settings: {
                unslick: true
            }
        }
    ]
});
////// Portfolio mob slider end


//=========== EXIT POPUP FUNCTION START

// var val = location.href.match(/[?&]days=(.*?)(?:$|&)/)[1];   // get params from URL
// $('#days').val(val);


(function(w) {
    "use strict";
    w.ysExit = function(o) {

        var defaults = {
                width: '40%', //popup width
                height: '', //popup height
                target: '#ys-container', //popup selector
                cookieValidity: 1, //days
                closeOnOutsideClick: true, //close popup if user clicks outside
                delay: 0, //delay in ms until the popup is registered
                debug: false //if true, the cookie will not be set

            },
            options = fixOptions(o),
            element = document.querySelector(options.target),
            layer = document.querySelector('.ys-layer'),
            closeBt = document.querySelector(options.target + ' .ys-popup-close'),
            inner = document.querySelector(options.target + ' .ys-box'),
            exitBt = document.querySelector(options.target + ' .ys-exit'),

            //cookies management helper
            cookies = {
                set: function(name, value, days) {
                    var components = [name + '=' + value];

                    if (days) {
                        var date = new Date();
                        date.setTime(date.getTime() + (days * 24 * 3600 * 1000));
                        components.push('expires=' + date.toGMTString());
                    }

                    components.push('path=/');

                    document.cookie = components.join('; ');
                },
                get: function(name) {
                    var start = name + '=',
                        arr = document.cookie.split(';'),
                        i;

                    for (i = 0; i < arr.length; i++) {
                        var item = arr[i].trim();

                        if (item.indexOf(start) === 0) {
                            return item.substring(start.length);
                        }
                    }

                    return null;
                }
            },
            //the popup object
            pop = {
                active: false,
                mouseLeftWindow: function(e) {
                    var from, to;

                    e = e ? e : window.event;
                    from = e.relatedTarget || e.toElement;

                    if (!from || from.nodeName === "HTML") {
                        pop.open();
                    }
                },
                setDimension: function(dimension, value) {
                    if (value.toString().indexOf('%') === -1) {
                        value = value + 'px';
                    }

                    inner.style[dimension] = value;
                },
                attachEvents: function() {
                    function close(e) {
                        pop.destroy();
                        e.preventDefault();
                    }

                    document.addEventListener('mouseout', pop.mouseLeftWindow, false);
                    closeBt.addEventListener('click', close);
                    exitBt.addEventListener('click', close);

                    if (options.closeOnOutsideClick) {
                        element.addEventListener('click', close);
                        inner.addEventListener('click', function(e) {
                            e.stopPropagation();
                        });
                    }

                    this.active = true;
                },
                detachEvents: function() {
                    document.removeEventListener('mouseout', pop.mouseLeftWindow);
                },
                open: function() {
                    var self = this;

                    element.classList.add('visible');
                    layer.classList.add('visible');
                    self.detachEvents();

                    setTimeout(function() {
                        self.setDimension('width', options.width);
                        self.setDimension('height', options.height);
                    }, 20);

                    setTimeout(function() {
                        element.classList.add('finished');
                    }, 200);
                },
                destroy: function() {
                    if (this.active) {
                        pop.detachEvents();

                        setTimeout(function() {
                            element.parentNode.removeChild(element);
                            layer.classList.remove('visible');
                        }, 200);

                        if (!options.debug) {
                            cookies.set('ysExit', 1, options.cookieValidity);
                        }
                    }
                }
            };

        //helper functions
        function fixOptions(options) {
            var newOptions = {};

            Object.keys(defaults).forEach(function(key) {
                newOptions[key] = options.hasOwnProperty(key) ? options[key] : defaults[key];
            });

            return newOptions;
        }

        function delegate(obj, func) {
            return function() {
                func.apply(obj, arguments);
            };
        }

        //start logic
        if (!cookies.get(options.cookieIdentifier)) {
            if (typeof options.delay !== 'number') {
                throw new Error('options.delay must be a numeric value');
            }

            if (!element) {
                throw new Error('Could not find element with selector: ' + options.target);
            }

            if (element.parentNode !== document.body) {
                throw new Error(options.target + ' element must be placed directly inside of the <body> element');
            }

            setTimeout(delegate(pop, pop.attachEvents), options.delay);
        }

        //return object with public interface
        return {
            open: delegate(pop, pop.open),
            destroy: delegate(pop, pop.destroy),
            getElement: function() {
                return element;
            }
        };
    };
})(window);






var options = {
    debug: false,
}




if ($.cookie('ysExit') == 1) {

} else {
    ysExit(options);
}

//=========== EXIT POPUP FUNCTION END