(function ($) {
   'use strict';
   var THEME = { 
       init: function () {
          this.sampleFunction();
       },
       settings: {
            desktop: 1200,
            tab: 1024,
            mobile: 768,
            scrollClassTrigger: 200,
            windowWidth: $(window).width(),
            windowheight: $(window).height(),
            scrollBarWidth: 0
        },

        sampleFunction: function () {

        },
        
        resizeListner: function() {
            $(window).on('load resize', function() {
                THEME.settings.windowWidth = $(window).width();
            });
        },

        // ScrollListner
        scrollListner: function() {
            $(window).on('scroll', function() {

            });
        },

        // Only mobile
        onlyMobile: function() {
            if (THEME.settings.windowWidth < THEME.settings.mobile) {

            }
        },
        // Tabs and largescreens
        onlyTabDesktop: function() {
            if (THEME.settings.windowWidth > THEME.settings.tab) {

            }
        },

        // Only largescreens
        onlyDesktop: function() {
            if (THEME.settings.windowWidth > THEME.settings.desktop) {
                this.scrollBarWidth();
                //console.log(window.innerWidth - document.getElementsByTagName('body')[0].clientWidth);
            }
        },

        // Scrollbarwidth
        scrollBarWidth: function() {
            this.settings.scrollBarWidth = window.innerWidth - document.getElementsByTagName('body')[0].clientWidth;
        },

        // exclusively for tween max
         // Detect animations
        detectAnimation: function() {
            var controller = new ScrollMagic.Controller();
            var elem = $('.detect-animate');

            elem.each(function() {
                var elem = this;
                var triggerElem = $(elem).data('top') ? $(elem).data('top') : elem;
                var elementAnimation = $(elem).data('animation');
                var delay = $(elem).data('delay') ? $(elem).data('delay') : 0;
                var speed = $(elem).data('speed') ? $(elem).data('speed') : 1;
                var hook = $(elem).data('hook') ? $(elem).data('hook') : 'onEnter';
                var reverse = $(elem).data('reverse') ? true : false;
                var tween = '';
                var duration = $(elem).data('duration') ? $(elem).data('duration') : 0;
                TweenLite.set($(elem), { autoAlpha: 1 });
                switch (elementAnimation) {
                    case "from-top":
                        tween = TweenMax.from(elem, speed, {
                            y: '-100px',
                            opacity: 0,
                            ease: Ease.ease,
                            delay: delay
                        });
                        break;
                    case "from-top-jerk":
                        tween = TweenMax.from(elem, speed, {
                            y: '-100px',
                            opacity: 0,
                            ease: Back.easeInOut,
                            delay: delay
                        });
                        break;
                    case "from-bottom":
                        tween = TweenMax.from(elem, speed, {
                            y: '100px',
                            opacity: 0,
                            ease: Ease.ease,
                            delay: delay
                        });
                        break;
                    case "from-bottom-jerk":
                        tween = TweenMax.from(elem, speed, {
                            y: '100px',
                            opacity: 0,
                            ease: Back.easeInOut,
                            delay: delay
                        });
                        break;
                    case "from-left":
                        tween = TweenMax.from(elem, speed, {
                            x: '-100px',
                            opacity: 0,
                            ease: Ease.ease,
                            delay: delay
                        });
                        break;
                    case "from-left-jerk":
                        tween = TweenMax.from(elem, speed, {
                            x: '-100px',
                            opacity: 0,
                            ease: Back.easeInOut,
                            delay: delay
                        });
                        break;
                    case "from-right":
                        tween = TweenMax.from(elem, speed, {
                            x: '100px',
                            opacity: 0,
                            ease: Ease.ease,
                            delay: delay
                        });
                        break;
                    case "from-right-jerk":
                        tween = TweenMax.from(elem, speed, {
                            x: '100px',
                            opacity: 0,
                            ease: Back.easeInOut,
                            delay: delay
                        });
                        break;
                    case "from-bottom-elements-lazy":
                        tween = TweenMax.staggerFrom($(elem).find('>*'), speed, {
                            y: '100px',
                            opacity: 0,
                            ease: Ease.ease,
                            delay: delay
                        }, .2);
                        break;
                    case "from-bottom-elements-lazy-jerk":
                        tween = TweenMax.staggerFrom($(elem).find('>*'), speed, {
                            y: '100px',
                            opacity: 0,
                            ease: Back.easeInOut,
                            delay: delay
                        }, .2);
                        break;
                    case "from-left-elements-lazy":
                        tween = TweenMax.staggerFrom($(elem).find('>*'), speed, {
                            x: '-100px',
                            opacity: 0,
                            ease: Ease.ease,
                            delay: delay
                        }, .2);
                        break;
                    case "from-left-elements-lazy-jerk":
                        tween = TweenMax.staggerFrom($(elem).find('>*'), speed, {
                            x: '-100px',
                            rotation: '-10',
                            opacity: 0,
                            ease: Back.easeInOut,
                            delay: delay
                        }, .2);
                        break;
                    case "from-right-elements-lazy":
                        tween = TweenMax.staggerFrom($(elem).find('>*'), speed, {
                            x: '100px',
                            opacity: 0,
                            ease: Ease.ease,
                            delay: delay
                        }, .2);
                        break;
                    case "from-right-elements-lazy-jerk":
                        tween = TweenMax.staggerFrom($(elem).find('>*'), speed, {
                            x: '100px',
                            opacity: 0,
                            ease: Back.easeInOut,
                            delay: delay
                        }, .2);
                        break;
                    case "from-top-elements-lazy":
                        tween = TweenMax.staggerFrom($(elem).find('>*'), speed, {
                            y: '-100px',
                            opacity: 0,
                            ease: Ease.ease,
                            delay: delay
                        }, .2);
                        break;
                    case "from-bottom-elements-lazy":
                        tween = TweenMax.staggerFrom($(elem).find('>*'), speed, {
                            y: '100px',
                            opacity: 0,
                            ease: Ease.ease,
                            delay: delay
                        }, .2);
                        break;
                    case "from-bottom-items-lazy":
                        tween = TweenMax.staggerFrom($(elem).find('.animate-item'), speed, {
                            y: '100px',
                            opacity: 0,
                            ease: Ease.ease,
                            delay: delay
                        }, .2);
                        break;
                    case "from-bottom-items-lazy-jerk":
                        tween = TweenMax.staggerFrom($(elem).find('.animate-item'), speed, {
                            y: '100px',
                            opacity: 0,
                            ease: Back.easeInOut,
                            delay: delay
                        }, .2);
                        break;
                    case "from-left-items-lazy":
                        tween = TweenMax.staggerFrom($(elem).find('.animate-item'), speed, {
                            x: '-100px',
                            opacity: 0,
                            ease: Ease.ease,
                            delay: delay
                        }, .2);
                        break;
                    case "from-left-items-lazy-jerk":
                        tween = TweenMax.staggerFrom($(elem).find('.animate-item'), speed, {
                            x: '-100px',
                            opacity: 0,
                            ease: Back.easeInOut,
                            delay: delay
                        }, .2);
                        break;
                    case "from-right-items-lazy":
                        tween = TweenMax.staggerFrom($(elem).find('.animate-item'), speed, {
                            x: '100px',
                            opacity: 0,
                            ease: Ease.ease,
                            delay: delay
                        }, .2);
                        break;
                    case "from-right-items-lazy-jerk":
                        tween = TweenMax.staggerFrom($(elem).find('.animate-item'), speed, {
                            x: '100px',
                            opacity: 0,
                            ease: Back.easeInOut,
                            delay: delay
                        }, .2);
                        break;
                    case "fade-in":
                        tween = TweenMax.from($(elem), speed, {
                            autoAlpha: 0,
                            yoyo: true,
                            delay: delay,
                            ease: Power0.easeNone
                        });
                        break;
                    case "fade-in-elements-lazy":
                        tween = TweenMax.staggerFrom($(elem).find('>*'), speed, {
                            autoAlpha: 0,
                            yoyo: true,
                            delay: delay,
                            ease: Ease.ease
                        }, 0.5);
                        break;
                    case "zoom-in-items-lazy":
                        TweenLite.set($(elem), {
                            perspective: 500
                        });
                        tween = TweenMax.staggerFrom($(elem).find('.animate-item'), speed, {
                            z: -200,
                            autoAlpha: 0,
                            ease: Back.easeOut,
                            delay: delay
                        }, .2);
                        break;
                    case "zoom-in":
                        tween = TweenMax.from($(elem), speed, {
                            autoAlpha: 0,
                            scale: 0,
                            transformOrigin: '50% 50%',
                            ease: Power0.easeNone
                        });
                        break;
                    case "zoom-in-jerk":
                        tween = TweenMax.from($(elem), speed, {
                            autoAlpha: 0,
                            scale: 0,
                            transformOrigin: '50% 50%',
                            ease: Back.easeIn
                        });
                        break;
                    default:
                        tween = '';
                };
                new ScrollMagic.Scene({
                        triggerElement: triggerElem,
                        triggerHook: hook,
                        duration: duration,
                        reverse: reverse
                    })
                    .setTween(tween)
                    .addTo(controller);
            });
        },
      
   };
   THEME.init(); 
}(jQuery)); 