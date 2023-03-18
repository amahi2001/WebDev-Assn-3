// counters
let numRows = 0;
let numCols = 0;

//Color Picker element
let colorPicker = document.getElementById("exampleColorInput");

//select color
let selectedColor = colorPicker.value;

// table body element
let tBody = document.getElementById("table_body");

// Add a row
function addR() {
    // Create a new row at the end of the table
    let newRow = tBody.insertRow(-1);
    //! Create a new <td> for numCols if numCols > 0
    for (let i = 0; i < numCols - 1; i++) {
        newRow.insertCell(-1);
        //give the cell a onclick function to set the background color
        fillCellOnClick(newRow.cells[i]);
    }
    //!this section is for if numCols is 0
    newRow.insertCell(-1)
    //give the cell a onclick function to set the background color
    fillCellOnClick(newRow.cells[numCols]);
    // Increment the number of rows
    numRows++;
}

// Add a column
function addC() {
    // Create a new <td> at end of row for each row in table
    for (const i of tBody.rows) {
        i.insertCell(-1);
        //give the cell a onclick function to set the background color
        fillCellOnClick(i.cells[numCols + 1]);
    }
    // Increment the number of columns
    numCols++;
}

// Remove a row
function removeR() {
    // Remove the last row in the table
    tBody.deleteRow(-1);
    // Decrement the number of rows
    numRows--;
}

// Remove a column
function removeC() {
    // Remove the last <td> in each row
    for (const i of tBody.rows) {
        i.deleteCell(-1);
    }
    // Decrement the number of columns
    numCols--;
}

// Set global variable for selected color
colorPicker.addEventListener('change', () => {
    // Get the selected color value
    selectedColor = colorPicker.value;
    console.log(selectedColor); // Log the selected color value
});

//gives the cell a onclick function to set the background color
function fillCellOnClick(cell) {
    cell.onclick = function () {
        cell.style.backgroundColor = selectedColor;
    }
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
