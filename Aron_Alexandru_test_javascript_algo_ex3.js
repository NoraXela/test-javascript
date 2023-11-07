/* Function for creating error table */
function createErrorTable(lineNo, errObject) {
  const table = document.createElement("table");

  // Create table data row
  const dataRow = document.createElement("tr");
  const dataCell = document.createElement("td");
  // Line X incorrect
  dataCell.textContent = errObject + " " + (lineNo + 1) + " incorrect";
  dataRow.appendChild(dataCell);
  for (var j = 0; j < 9; j++) {
    const dataCell = document.createElement("td");
    dataCell.textContent = array_number[lineNo][j * 2];
    dataRow.appendChild(dataCell);
  }
  table.appendChild(dataRow);

  return table;
}

/* Function for checking lines */
function checkLines() {
  for (var i = 0; i < 9; i++) {
    console.log(array_number[i]);
    console.log(verifyPosition(array_number[i]));
    if (verifyPosition(array_number[i]) === false) {
      const table2 = createErrorTable(i, "Line");
      table2.setAttribute("border", "2");

      const tableContainer2 = document.getElementById("table-container2");
      tableContainer2.appendChild(table2);
    }
  }
}

/* Checks to see if all lines are correct */
checkLines();
