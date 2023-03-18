// counters
let numRows = 0;
let numCols = 0;

//selected color
let colorSelected;

// table body element
let tBody = document.getElementById("table_body");

// Add a row
function addR() {
    // Create a new row at the end of the table
    let newRow = tBody.insertRow(-1);
    // Create a new <td> for num cols - 1 in the row
    for (let i = 0; i < numCols - 1; i++) {
        newRow.insertCell(-1);
    }
    newRow.insertCell(-1)
    // Increment the number of rows
    numRows++;
}

// Add a column
function addC() {
    // Create a new <td> at end of row for each row in table
    for (const i of tBody.rows) {
        i.insertCell(-1);
    }
    // Increment the number of columns
    numCols++;
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU() {
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll() {
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll() {
    alert("Clicked Clear All"); // Replace this line with your code.
}
