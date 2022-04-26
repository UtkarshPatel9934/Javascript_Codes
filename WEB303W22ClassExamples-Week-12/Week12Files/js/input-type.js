(function () {

  // without the var keyword, these variables are declared on the global scope
  // the global scope means they're part of the window object
  pwd = document.getElementById('pwd');     // Get password input
  window.chk = document.getElementById('showPwd'); // Get checkbox

  chk.addEventListener('change', (e) => {         // When user clicks on checkbox
    var target = e.target; // || e.srcElement;      // Get that element
    // srcElement is deprecated in events, we should not be using it anymore
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/srcElement
    var currentTarget = this; // the same thing, getting the target, but in a different way

    console.log("target value: ", target, ", current value of this: ", currentTarget);
    // the try catch will never happen because nobody can actually use internet explorer 8 or older
    // try {                                       // Try the following code block
    if (target.checked) {                     // If the checkbox is checked
      pwd.type = 'text';                      // Set pwd type to text
    } else {                                  // Otherwise
      pwd.type = 'password';                  // Set pwd type to password
    }
    // } catch (error) {                            // If this causes an error
    //   console.error('This browser cannot switch type'); // Say that cannot switch type
    // }
  });

}());