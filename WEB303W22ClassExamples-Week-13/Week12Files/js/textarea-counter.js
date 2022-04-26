(function () {
  var bio = document.getElementById('bio');        // <textarea> element
  var bioCount = document.getElementById('bio-count');  // Character count el
  var bioCountNumber = document.getElementById('bio-count-number');

  bio.addEventListener('focus', updateCounter);       // Call updateCounter() on focus
  bio.addEventListener('input', updateCounter);       // Call updateCounter() on input

  bio.addEventListener('blur', function () {          // On leaving the element
    if (this.value.length <= 140) {             // If bio is not too long
      bioCount.className = 'hide';             // Hide the counter
    }
  });

  function updateCounter(e) {
    var count = 140 - this.value.length;      // How many characters are left
    if (count < 0) {                            // If less than 0 chars free
      bioCount.className = 'error';             // Add class of error
    } else if (count <= 15) {                   // If less than 15 chars free
      bioCount.className = 'warn';              // Add class of warn
    } else {                                    // Otherwise
      bioCount.className = 'good';              // Add class of good
    }
    bioCountNumber.innerHTML = count;               // Update the counter element
  }

}());