
/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        //$postContent.fitVids();

        //$(".scroll-down").arctic_scroll();

        $("demoTabs").ds_tabs();

        $(".menu-button, .nav-cover, .nav-close").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

    });

    $.fn.ds_tabs = function(options) {

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
            //console.log("tabHref " + tabHref + " tabsContentId " + tabsContentId)


            if(!$this.hasClass("active")) {
                tabsNav.removeClass("active");
                $this.addClass("active");
            }

            tabsContent.each(function() {
                var id = $(this).attr("id");
                if(id == tabHref) {
                    //console.log("tabHref " + tabHref + " tabsContentId " + id);
                    var activeTab = $("#" + id);
                    tabsContent.removeClass("active").hide();
                    activeTab.addClass("active").show();
                }
            });
        });
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