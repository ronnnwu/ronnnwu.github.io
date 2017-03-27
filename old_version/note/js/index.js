;(function ($) {
    'use strict';
    var $body    = $('html, body'),
        content  = $('#main').smoothState({
            prefetch: true,
            pageCacheSize: 4,
            onStart: {
                duration: 500,
                render: function (url, $container) {
                    $body.animate({
                        scrollTop: 0
                    });
                    $container.addClass('is-exiting');                    
                    content.restartCSSAnimations();
                }
            },
            onReady:{
                duration: 0,
                render: function (url, $container, $newcontent) {
                    
                    
                    $container.removeClass('is-exiting');
                    $container.html($content);
                }
            }

        }).data('smoothState');
})(jQuery);