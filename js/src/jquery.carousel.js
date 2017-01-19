(function($) {

  $.fn.carousel = function(options) {

    var options = $.extend({
        quantity: 3
        }, options);

    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var totalWidthEl = $('.carousel-element').outerWidth(true);
    var widthOneEl = $('.carousel-element').outerWidth();

    var carouselHiderWidth = options.quantity*totalWidthEl-totalWidthEl+widthOneEl;
    $('.carousel-hider').width(carouselHiderWidth);

    var pixelsOffset = totalWidthEl;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - options.quantity) * pixelsOffset);
    var maximumOffset = 0;


    leftUIEl.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += pixelsOffset;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= pixelsOffset;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });
        return this;
    };
    
})(jQuery);
