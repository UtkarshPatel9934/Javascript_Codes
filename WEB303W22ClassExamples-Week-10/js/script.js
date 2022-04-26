var people = [
    {
        name: 'Hyun',
        rate: 90
    },
    {
        name: 'Neha',
        rate: 130
    },
    {
        name: 'Ahmed',
        rate: 70
    },
    {
        name: 'Manjot',
        rate: 120
    },
    {
        name: 'Pushkar',
        rate: 67
    },
    {
        name: 'Kushan',
        rate: 200
    }
];

// // start of static filter data example
// $(function () {
    /* This was for the static filtering of the data

    // old way of doing things with array processing

    // // LOOP THROUGH ARRAY ADD MATCHES TO TABLE
    // var results = []; // Results array
    // people.forEach((eachPersonBeingProcessed) => { // Each person
    //     // Is the rate is in range
    //     if (eachPersonBeingProcessed.rate >= 65 && eachPersonBeingProcessed.rate <= 125) {
    //         results.push(eachPersonBeingProcessed); // Add to array
    //     }
    // });
    
    // newer way of filtering array based on criteria

    // FUNCTION ACTS AS FILTER
    function priceRange(person) {
        return (person.rate >= 65) && (person.rate <= 90);
    }
    // FILTER PEOPLE ARRAY & ADD MATCHES TO ARRAY
    var results = [];
    results = people.filter((person) => { // anonymous version of the method defined above
        // less efficient version using an if statement instead of just returning the condition
        if ((person.rate >= 65) && (person.rate <= 90)) {
            return true;
        }
        return false;
    });

    
    var $tableBody = $('<tbody></tbody>');
    for (var i = 0; i < results.length; i++) {
        var person = results[i]; // Store current person
        var $row = $('<tr></tr>'); // Create row for them
        $row.append($('<td></td>').text(person.name)); // Add name
        $row.append($('<td></td>').text(person.rate)); // Add rate
        $tableBody.append($row);
    }
    $('thead').after($tableBody); // Add body

    // end of the static filtering of the data */
    
// });
// // end of static filter data example


// // beginning of the dynamic filtering example
// var rows = []; // rows array
// var $min; // Minimum text input
// var $max; // Maximum text input
// var $table; // Table to show results
// function makeRows() {
//     people.forEach(function (person) { // For each person
//         var $row = $('<tr></tr>'); // Create their row
//         $row.append($('<td></td>').text(person.name));// Add name
//         $row.append($('<td></td>').text(person.rate));// Add rate
//         rows.push({ // Create rows array
//             person: person, // Person object
//             $element: $row // jQuery object: row
//         });
//     });
// }
// function appendRows() {
//     var $tbody = $('<tbody></tbody>'); // Create <tbody> element
//     rows.forEach(function (row) { // Each obj in rows array
//         $tbody.append(row.$element); // Add HTML for the row
//     });
//     $table.append($tbody); // Add rows to the table
// }
// function update(min, max) {
//     rows.forEach(function (row) { // For each row
//         // If the person's price is within range
//         if (row.person.rate >= min && row.person.rate <= max)
//         {
//             row.$element.show(); // Show the row
//         } else { // Otherwise
//             row.$element.hide(); // Hide the row
//         }
//     });
// }
// function init() { // this is essentially the jquery ready function now
//     $min = $('#value-min'); // Minimum text input
//     $max = $('#value-max'); // Maximum text input
//     $table = $('#rates'); // Table to show results

//     // console.log("got here", $min.val(), " ", $max.val());
//     // Set up the slider
//     $('#slider').noUiSlider({
//         range: [0, 200],
//         start: [65, 100],
//         handles: 2,
//         margin: 20,
//         connect: true,
//         serialization: {
//             to: [$min, $max],
//             resolution: 1
//         }
//     }).on("change", () => {
//         update($min.val(), $max.val());
//     });
//     // console.log("got here too");

//     makeRows(); // Create rows and rows array
//     console.log("rows array construted: ", rows);
    
//     appendRows(); // Add the rows to the table
//     // Update table to show matching people
//     update($min.val(), $max.val());
// }

// $(init);
// // $(function () {
// //     init();
// // }); // Call init() when DOM is ready
// end of dynamic filtering example

// image filter example
$(function () {
    var $imgs = $('#gallery img'); // Store all images
    var $buttons = $('#buttons'); // Store buttons
    var tagged = {
        // "Animators": [
        //     $(img[0])
        // ],
        // "Illustrators": [
        //     $(img[0]), $(img[2])
        // ],
        // "Photographers": [
        //     $(img[1]), $(img[2])
        // ],
        // "Filmmakers": [
        //     $(img[1])
        // ]
    }; // Create tagged object
    $imgs.each(function () { // Loop through images
        var img = this; // Store img in var
        var hashtags = $(img).data('hashtags'); // Get its tags
        if (hashtags) { // If it has tags
            hashtags.split(', ').forEach(function (tagName) {// Split at comma
                if (tagged[tagName] == null) { // If obj has no tag
                    tagged[tagName] = []; // Add array to object
                }
                tagged[tagName].push(img); // Add image to array
            });
        }
    });
    $('<button/>'/*).text("Show all").addClass("active")*/, { // Create button
        text: 'Show All', // Add text
        class: 'active', // Make it active
        click: function () { // Add click handler
            $(this) // Get clicked button
                .addClass('active') // Make it active
                .siblings() // Get its siblings
                .removeClass('active'); // Remove active class
            $imgs.show(); // Show all images
        }
    }).appendTo($buttons); // Add to buttons

    $.each(tagged, function (tagName) { // For each tag name
        var currentTagArray = this;
        $('<button/>', { // Create empty button
            // Add tag name
            text: tagName + ' (' + currentTagArray.length + ')',
            click: function () { // Add click handler
                $(this) // The button clicked on
                    .addClass('active') // Make clicked item active
                    .siblings() // Get its siblings
                    .removeClass('active'); // Remove active siblings
                console.log("got to the click event of a button", tagged[tagName]);
                $imgs // With all of the images
                    .hide() // Hide them
                    .filter(tagged[tagName]) // Find ones with this tag
                    .show(); // Show just those images
            }
        }).appendTo($buttons); // Add to the buttons});
    });
});



// week 10 simple examples

var someArray = ['a', 'b', 'c', 'd']; 
var someObject = {
    id: 0,
    value: "a",
    name: "first-element"
};

someArray.push("e");
console.log(someArray);

someArray.unshift("f");
console.log(someArray);

console.log("popped something off the array end: ", someArray.pop());
console.log(someArray);

console.log("shifted something off the array beginning: ", someArray.shift());
console.log(someArray);

someArray.forEach((elm, i) => { 
    console.log("Outputting each element one at a time: ", elm, " at index: ", i);
});


console.log(someObject.id);
console.log(someObject["id"]); //same thing, just different way of selecting it


