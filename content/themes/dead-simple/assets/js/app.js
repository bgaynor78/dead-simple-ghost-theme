
/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        // var $postContent = $(".post-content");
        //$postContent.fitVids();

        //$(".scroll-down").arctic_scroll();

        $(".ds-tabs").ds_tabs();
        $(".ds-accordion").ds_accordions();

        $(".menu-button, .nav-cover, .nav-close").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

    });

    $.fn.ds_tabs = function() {

        var tabContainer = $(this);
        var tabsNav = $(".tabs-nav > li > a");
        var tabsContent = $(".tabs-content-container > div");
        var tabsContentIds = [];

        tabsContent.hide();
        tabsNav.first().addClass("active");
        tabsContent.first().show();

        tabsNav.click(function(event) {
            event.preventDefault();
            var $this = $(this);
            var tabId = $this.attr("data-tab");
            var tabHref = $this.attr("href").replace("#", "");
            var tabsContentId = tabsContent.attr("id");

            if(!$this.hasClass("active")) {
                tabsNav.removeClass("active");
                $this.addClass("active");
            }

            tabsContent.each(function() {
                var id = $(this).attr("id");
                if(id == tabHref) {
                    var activeTab = $("#" + id);
                    tabsContent.removeClass("active").hide();
                    activeTab.addClass("active").show();
                }
            });
        });
    };

    $.fn.ds_accordions = function() {
        var $this = $(this);
        var accordionTriggers = $this.find(".accordion-trigger");
        var accordionPanels = $this.find(".accordion-panel");
        var firstPanelHeight = accordionPanels.first()[0].scrollHeight;

        accordionPanels.first().css({"max-height" : firstPanelHeight + "px"});

        accordionTriggers.click(function(event) {
            event.preventDefault();
            var $this = $(this);
            var triggerHref = $this.find("a").attr("href").replace("#", "");
            accordionTriggers.removeClass("active");
            accordionTriggers.attr("aria-expanded", false);
            if($this.hasClass("active")) {
                $this.removeClass("active");
                $this.attr("aria-expanded", false);
            }else {
                $this.addClass("active");
                $this.attr("aria-expanded", true);
            }

            accordionPanels.each(function() {
                var id = $(this).attr("id");
                if(id == triggerHref) {
                    var activePanel = $("#" + id);
                    accordionPanels.css({"max-height" : "0px"});
                    if (activePanel.css("max-height") != "0px"){
                        activePanel.css({"max-height" : 0});
                    } else {
                        activePanel.css({"max-height" : activePanel[0].scrollHeight + "px"});
                    }
                }
            });
        });
    };

    $.fn.ds_slideshow = function() {
        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
        }
    }

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll

    // CAN REMOVE COMMENTS SO A SCROLL DOWN FEATURE IS DOABLE
    // $.fn.arctic_scroll = function (options) {
    //
    //     var defaults = {
    //             elem: $(this),
    //             speed: 500
    //         },
    //
    //         allOptions = $.extend(defaults, options);
    //
    //     allOptions.elem.click(function (event) {
    //         event.preventDefault();
    //         var $this = $(this),
    //             $htmlBody = $('html, body'),
    //             offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
    //             position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
    //             toMove;
    //
    //         if (offset) {
    //             toMove = parseInt(offset);
    //             $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
    //         } else if (position) {
    //             toMove = parseInt(position);
    //             $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
    //         } else {
    //             $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
    //         }
    //     });
    //
    // };

})(jQuery);