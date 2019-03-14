// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Loop Through `data` and console.log each UFO sighting
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
});

// Use d3 to append one table row `tr` for each UFO sighting
data.forEach(function(ufoSighting) {
   console.log(ufoSighting);
   var row = tbody.append("tr");
});

// Use `Object.entries` to console.log each UFO sighting value
data.forEach(function(ufoSighting) {
   console.log(ufoSighting);
   var row = tbody.append("tr");

   Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);
});
});

// Use d3 to append 1 cell per UFO sighting value (weekday, date, high, low)
data.forEach(function(ufoSighting) {
   console.log(ufoSighting);
   var row = tbody.append("tr");

Object.entries(ufoSighting).forEach(function([key, value]) {
     console.log(key, value);

// Append a cell to the row for each value in the UFO sighting object
     var cell = tbody.append("td");
});
});

// Use d3 to update each cell's text with UFO sighting values (weekday, date, high, low)
data.forEach(function(ufoSighting) {
console.log(ufoSighting);
var row = tbody.append("tr");
Object.entries(ufoSighting).forEach(function([key, value]) {
console.log(key, value);

// Append a cell to the row for each value in the weather report object
var cell = tbody.append("td");
cell.text(value);
});
});

