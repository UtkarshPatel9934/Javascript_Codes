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

var compare = {
    name: function (a, b) {
        console.log("processing the words", b, ", ", a);
        if (a < b) {
            return -1;
        }
        else if (b < a) {
            return 1
        }
        else //they're equal
        {
            return 0;
        }
    },
    compareNumbersAscending: function (a, b) {
        // b is the first value being compared, a is the second
        console.log("processing the numbers", b, ", ", a);
        return parseInt(a) - parseInt(b);
    },
    compareNumbersDescending: function (a, b) {
        // b is the first value being compared, a is the second
        console.log("processing the numbers", b, ", ", a);
        return b - a;
    },
    compareNumbersRandom: function (a, b) {
        return 0.5 - Math.random(); // Math.random() returns a value between 0 and 1
    },
    compareDates: function (a, b) {
        var dateA = new Date(a);
        var dateB = new Date(b);
        return dateA - dateB;
    }
};


// beginning of the dynamic filtering example
function populateTable() {
    var $tbody = $('#rates').find('tbody'); // Create <tbody> element
    people.forEach(function (person) { // For each person
        var $row = $('<tr></tr>'); // Create their row
        $row.append($('<td></td>').text(person.name));// Add name
        $row.append($('<td></td>').text(person.rate));// Add rate
        $tbody.append($row); // Add HTML for the row
    });
    $('#rates').append($tbody); // Add rows to the table
}

function init() { // this is essentially the jquery ready function now
    populateTable();


    $('.sortable').each(function () {
        var $table = $(this); // This table
        var $tbody = $table.find('tbody'); // Table body
        var $controls = $table.find('th'); // Table headers
        var rows = $tbody.find('tr').toArray(); // Array of rows
        $controls.on('click', function () { // Event handler
            var $header = $(this); // Get header
            var order = $header.data('sortbythis'); // either name or compareNumbersAscending
            var column; // Used later
            if ($header.is('.ascending') || $header.is('.descending')) { // Toggle to other class
                $header.toggleClass('ascending descending');
                // Reverse the array
                $tbody.append(rows.reverse());
            } else { //not sorted yet, we need to sort
                $header.addClass('ascending'); // Add class to header
                // Remove asc or desc from all other headers
                $header.siblings().removeClass('ascending descending'); // If compare object has method of that name
                console.log("check if has property");
                if (compare.hasOwnProperty(order)) {
                    console.log("has property");
                    column = $controls.index(this); // Column's index no
                    rows.sort(function (a, b) { // Call sort() on rows
                        a = $(a).find('td').eq(column).text();// Text of column row a
                        b = $(b).find('td').eq(column).text();// Text of column row b
                        return compare[order](a, b); // Call compare method
                    });
                    $tbody.append(rows);
                }
            }
        });
    });

}

$(init);

//-----------------------------------------------------
// week 11 examples

var dates = ["1988-03-21", "1874-01-11", "2020-01-10T00:00", "2020-01-10"];
var prices = [1, 2, 125, 19, 14];

console.log("prices before sort:", [1, 2, 125, 19, 14])
console.log("dates before sort:", ["1988-03-21", "1874-01-11", "2020-01-10T00:00", "2020-01-10"]);
dates.sort(compare.compareDates);

prices.sort(compare.compareNumbersRandom);

/* [1, 2, 125, 19, 14]
 
initially, a = 2
initially, b = 1
 
2 - 1 = 1;
greater than 1, they're in the right order
 
a = 125
b = 2
125 - 2 = 123
greater than 1, they're in the right order
 
a = 19
b = 125
19 - 125 = -106
less than 1, they're in the wrong order, a goes before b
 
[1, 2, 19, 125, 14]
 
 
we would expect
a = 14
b = 125
14 - 125 = -111
less than 1, they're in the wrong order, a goes before b
but this does not happen
 
but ACTUALLY
a = 14
b = 19
14 - 19 = -5
less than 1, so 14 goes before 19
[1, 2, 14, 19, 125]
 
*/
console.log("dates after sort", dates);
console.log("prices sorted randomly", prices);