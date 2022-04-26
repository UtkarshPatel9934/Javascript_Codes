(function () {
  var form, options, other, otherText;           // Declare variables
  form = document.getElementById('how-heard');    // Get the form
  options = form.elements.heard;                     // Get the radio buttons
  other = document.getElementById('other');        // Other radio button
  otherText = document.getElementById('other-text');   // Other text input
  otherText.className = 'hide';                        // Hide other text input

  for (var i = [0]; i < options.length; i++) {         // Loop through radios
    options[i].addEventListener('click', radioChanged);       // Add event listener
  }

  function radioChanged(e) {
    let hide = other.checked ? '' : 'hide';                // Is other checked?
    otherText.className = other.checked ? '' : 'hide';                        // Text input visibility
    if (hide !== '') {                                        // If text input hidden
      // if it's not an empty string, then it's set to 'hide', which means the element is hidden
      otherText.value = '';                            // Empty its contents
    }
  }
}());