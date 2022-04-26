$('.slider').each(function () {
    var $this = $(this); // Current slider// Get the slide-group (container)
    var $group = $this.find('.slide-group');
    // Create jQuery object to hold all slides
    var $slides = $this.find('.slide');
    var buttonArray = []; // Array holds nav
    var currentIndex = 0; // Current slide
    var timeout; // Gap between slide
    
    function move(newIndex) {
        var animateLeft, slideLeft; // Declare variables
        advance();
         // Call advance() again// If it is the current slide animating, do nothing
        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }
        // Remove active class from current slide button
        buttonArray[currentIndex].removeClass('active');
        // Add active class to new slide button
        buttonArray[newIndex].addClass('active');
        if (newIndex > currentIndex) { // If new item > current
            slideLeft = '100%'; // Sit new slide to the right
            animateLeft = '-100%'; // Animate current group to left
        } else { // Otherwise
            slideLeft = '-100%'; // Sit the new slide to the left
            animateLeft = '100%'; // Animate current group right
        }
        // Position slide left (if less) right (if more) of current
        $slides.eq(newIndex).css({ left: slideLeft, display: 'block' });
        $group.animate({ left: animateLeft }, function () { // Animate
            $slides.eq(currentIndex).css({ display: 'none' }); // Hide old
            $slides.eq(newIndex).css({ left: 0 }); // Set pos: new item
            $group.css({ left: 0 }); // Set pos: slide group
            currentIndex = newIndex; // Set to new image
        });
    }

    function advance() { // Set timer
        clearTimeout(timeout); // Clear timeout
        // New timer
        timeout = setTimeout(function () {
            // If slide < total slides
            if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1); // Move slides
            } else { // Otherwise
                move(0); // Go to first slide
            }
        }, 4000); // Milliseconds timer waits
    }
    $.each($slides, function (index) {
        // Create button
        var $button = $('<button type="button" class="slide-btn">&bull;</button>');
        if (index === currentIndex) { // Is it current item
            $button.addClass('active'); // Add active class
        }
        $button.on('click', function () { // Add event handler
            move(index); // It calls the move()
        }).appendTo('.slide-buttons'); // Add to holder
        buttonArray.push($button); // Add to array
    });
    advance(); // Ready, move it

});