$(function () {
    
    var request; // Last image request
    var $current; // Current image
    var cache = {}; // Cache object
    var $frame = $('#photo-frame'); // Container
    var $thumbs = $('.thumb'); // Container

    function crossfade($img) { // New image as parameter
        if ($current) { // If image showing
            $current.stop().fadeOut('slow'); // Stop animation & fade out
        }
        $img.css({ // Set CSS margins for new img
            marginLeft: -$img.width() / 2, // Neg margin 1/2 image width
            marginTop: -$img.height() / 2 // Neg margin 1/2 image height
        });
        $img.stop().fadeTo('slow', 1); // Stop animation & fade in
        $current = $img; // New image is current one
    }

    $(document).on('click', '.thumb', function (e) { // Click on thumb
        var $img; // Local var called $img
        var src = this.href; // Store path to image
        var request = src; // Store latest image
        e.preventDefault(); // Stop default link behavior
        $thumbs.removeClass('active'); // Remove active from thumbs
        $(this).addClass('active'); // Add active to clicked one
        $frame.removeClass("default-text");
        if (cache.hasOwnProperty(src)) { // If cache contains this img
            if (cache[src].isLoading === false) { // and it's not loading
                crossfade(cache[src].$img); // Call crossfade() function
            }
        } else { // Otherwise it is not in the cache
            $img = $('<img/>'); // Store empty <img/> in $img
            cache[src] = { // Store this image in cache
                $img: $img, // Add the path to the image
                isLoading: true // Set isLoading to false
            };
        
            // When image has loaded this code runs
            $img.on('load', function () { // When image loaded
                $(this).hide(); // Hide it
                // Remove is-loading class & append image
                $frame.removeClass('is-loading').append($img);
                cache[src].isLoading = false; // Update isLoading in cache
                // If still most recently requested image then
                if (request === src) {
                    crossfade($(this)); // Call crossfade() function
                } // to solve async load issue
            });
            $frame.addClass('is-loading'); // Add is-loading to frame
            $img.attr({ // Set attributes on <img>
                'src': src, // src attribute loads image\
                'alt': this.title || '' // Add title if one given
            });
        }
    });

});