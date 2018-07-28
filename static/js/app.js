
// YOUR CODE HERE!
// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#dateInput");
var $cityInput = document.querySelector("#cityInput");
var $stateInput = document.querySelector("#stateInput");
var $countryInput = document.querySelector("#countryInput");
var $shapeInput = document.querySelector("#shapeInput");
var $submitButton = document.querySelector("#submit");


//Set UFO DataSet
var UFO_data = dataSet;

// renderTable renders the UFO Sightings to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < UFO_data.length; i++) {
    // Get get the sightings object and its fields
    var CurrentSighting = UFO_data[i];
    var fields = Object.keys(CurrentSighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the CurrentSighting object, create a new cell
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = CurrentSighting[field];
    }
  }
}
$submitButton.addEventListener("click", filterInput);

function filterDate(filteredSighting) {
  return filteredSighting.datetime == $dateInput.value.trim().toLowerCase();
};
function filterCity(filteredSighting) {
  return filteredSighting.city == $cityInput.value.trim().toLowerCase();
};
function filterState(filteredSighting) {
  return filteredSighting.state == $stateInput.value.trim().toLowerCase();
};
function filterCountry(filteredSighting) {
  return filteredSighting.country == $countryInput.value.trim().toLowerCase();
};
function filterShape(filteredSighting) {
  return filteredSighting.shape == $shapeInput.value.trim().toLowerCase();
};

function filterInput() {

  UFO_data = dataSet;

  // filters thrugh UFO_data
  if ($dateInput.value) {
    UFO_data = UFO_data.filter(filterDate);
  };
  if ($cityInput.value) {
    UFO_data = UFO_data.filter(filterCity);
  };
  if ($stateInput.value) {
    UFO_data = UFO_data.filter(filterState);
  };
  if ($countryInput.value) {
    UFO_data = UFO_data.filter(filterCountry);
  };
  if ($shapeInput.value) {
    UFO_data = UFO_data.filter(filterShape);
  };

  $dateInput.value = "";
  $cityInput.value = "";
  $stateInput.value = "";
  $countryInput.value = "";
  $shapeInput.value = "";

  renderTable();
};

renderTable();