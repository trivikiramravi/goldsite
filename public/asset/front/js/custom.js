(function($){
    "use strict"; // Start of use strict
    /* ---------------------------------------------
     Owl carousel
     --------------------------------------------- */
    function init_carousel(){
        $('.owl-carousel').each(function(){
          var config = $(this).data();
          config.navText = [''];
          var animateOut = $(this).data('animateout');
          var animateIn = $(this).data('animatein');
          if(typeof animateOut != 'undefined' ){
            config.animateOut = animateOut;
          }
          if(typeof animateIn != 'undefined' ){
            config.animateIn = animateIn;
          }

          var owl = $(this);
          owl.owlCarousel(config);
        });
    }
    
   
   
	   //  $(".mobile-navigation").click(function(){
//        $("#main-menu").toggleClass("menuxmenu");
//    });
	   
   $('.animation').each(function(){

    var waypoint = new Waypoint({
      element: this,
      handler: function(direction) {
        var animation = $(this.element).attr('data-animation');
        $(this.element).css('opacity','1');
        $(this.element).addClass("animated " + animation);
      },
      offset: '75%' 
    })
  });
  
   
   
 
   
    /* ---------------------------------------------
     Scripts ready
     --------------------------------------------- */
    $(document).ready(function() {
        // OWL CAROUSEL
        init_carousel();
        // Vertical menu width
        auto_width_vertical();
        Scrollbar_header_sidebar();
        stick_header()
        // bg-parallax
        if($('.bg-parallax').length >0){
            var w = $( window ).width();
            if( w > 911 ){
              $('.bg-parallax').each(function(){
                  $(this).parallax("50%",0.5);
              }) 
            }
             
        }
      
        
        
       
        

            
          
	$('#featured-arrivals').carousel({
				interval: 5000
		});
       
       
	   
	   
	  

    });
	
	
	
	/**
 * Plugin for linking multiple owl instances
 * @version 1.0.0
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
    /**
     * Creates the Linked plugin.
     * @class The Linked Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Linked = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'dragged.owl.carousel changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.linked) {
                    this.update(e);
                }
            }, this),
            'linked.to.owl.carousel': $.proxy(function(e, index, speed, standard, propagate) {
                if (e.namespace && this._core.settings.linked) {
                    this.toSlide(index, speed, propagate);
                }
            }, this)
        };

        // register event handlers
        this._core.$element.on(this._handlers);

        // set default options
        this._core.options = $.extend({}, Linked.Defaults, this._core.options);
    };

    /**
     * Default options.
     * @public
     */
    Linked.Defaults = {
        linked: false
    };

    /**
     * Updated linked instances
     */
    Linked.prototype.update = function(e) {
        this.toSlide( e.relatedTarget.relative(e.item.index) );
    };

    /**
     * Carry out the to.owl.carousel proxy function
     * @param {int} index
     * @param {int} speed
     * @param {bool} propagate
     */
    Linked.prototype.toSlide = function(index, speed, propagate) {
        var id = this._core.$element.attr('id'),
            linked = typeof(this._core.settings.linked) === 'string' ? this._core.settings.linked.split(',') : this._core.settings.linked;

        if ( typeof propagate == 'undefined' ) {
            propagate = true;
        }

        index = index || 0;

        if ( propagate ) {
            $.each(linked, function(i, el){
                $(el).trigger('linked.to.owl.carousel', [index, 300, true, false]);
            });
        } else {
            this._core.$element.trigger('to.owl.carousel', [index, 300, true]);

            if ( this._core.settings.current ) {
                this._core._plugins.current.switchTo(index);
            }
        }
    };

    /**
     * Destroys the plugin.
     * @protected
     */
    Linked.prototype.destroy = function() {
        var handler, property;

        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.linked = Linked;

})(window.Zepto || window.jQuery, window, document);



var sync2 = $(".carousel_2");
$(sync2).owlCarousel({
    nav: true,
	navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    loop:true,
    items: 3,
    margin:0,
    center:true,
    linked: sync2.prev()
}).on('initialized.owl.carousel linked.to.owl.carousel', function() {
    sync2.find('.owl-item.current').removeClass('current');
    var current = sync2.find('.owl-item.active.center').length ? sync2.find('.owl-item.active.center') : sync2.find('.owl-item.active').eq(0);
    current.addClass('current');
    
});

var sync2 = $(".carousel_3");
$(sync2).owlCarousel({
    nav: false,
    loop:true,
	autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    items: 6,
    margin:0,
    
});



function resizeNav() {
        $(".mobile-v-menu").css({"height": window.innerHeight});
        var radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
        var diameter = radius * 2;
        $(".nav-layer").width(diameter);
        $(".nav-layer").height(diameter);
        $(".nav-layer").css({"margin-top": -radius, "margin-left": -radius});
    }
    $(".nav-toggle").click(function() {
        $(".nav-toggle, .nav-layer, .mobile-v-menu, .mobile-view").toggleClass("open");
    });
    $(window).resize(resizeNav);
    resizeNav();
   
	   //  $(".mobile-navigation").click(function(){
//        $("#main-menu").toggleClass("menuxmenu");
//    });


    
    	   $(".filterhide").click(function(){
    $(".classfiltershow").addClass("showtime");
  });
  $(".filterdiv1").click(function(){
    $(".classfiltershow").removeClass("showtime");
  }); 

	
	
 
	
})(jQuery); // End of use strict



      