(function () {
  var form = document.getElementById('interests'); // Get form
  var elements = form.elements;                      // All elements in form
  var options = elements.genre;                     // Array: genre checkboxes
  var all = elements.all;     // The 'All' checkbox

  function updateAll(e) {
    for (var i = 0; i < options.length; i++) {       // Loop through checkboxes
      options[i].checked = all.checked;              // Update checked property
      console.log(options[i].name, " and value: ", options[i].value);
    }
  }
  addEvent(all, 'change', updateAll);                // Add event listener

  function clearAllOption(e) {
    // var target = e.target;           // Get target of event
    var allCheckboxesChecked = true;
    for (var i = 0; i < options.length; i++) {         // Loop through checkboxes 
      allCheckboxesChecked = allCheckboxesChecked && options[i].checked;
    }
    all.checked = allCheckboxesChecked;

    // if (!target.checked) {                           // If not checked
    //   all.checked = false;                           // Uncheck 'All' checkbox
    // }
  }
  for (var i = 0; i < options.length; i++) {         // Loop through checkboxes 
    addEvent(options[i], 'change', clearAllOption);  // Add event listener
  }

}());