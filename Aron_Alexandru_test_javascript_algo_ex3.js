/* Function for creating line error table */
function createLineErrorTable(lineNo) {
  const table = document.createElement("table");

  // Create table data row
  const dataRow = document.createElement("tr");
  const dataCell = document.createElement("td");
  // Line X incorrect
  dataCell.textContent = "Line " + (lineNo + 1) + " incorrect";
  dataRow.appendChild(dataCell);
  for (var j = 0; j < 9; j++) {
    const dataCell = document.createElement("td");
    dataCell.textContent = array_number[lineNo][j * 2];
    dataRow.appendChild(dataCell);
  }
  table.appendChild(dataRow);

  return table;
}

/* Function for creating column error table */
function createColumnErrorTable(entityNo, errObject) {
  const table = document.createElement("table");

  // Create table data row
  const dataRow = document.createElement("tr");
  const dataCell = document.createElement("td");
  // Line X incorrect
  dataCell.textContent = errObject + " " + entityNo + " incorrect";
  dataRow.appendChild(dataCell);
  for (var j = 0; j < 9; j++) {
    const dataCell = document.createElement("td");
    dataCell.textContent = colLine[j];
    dataRow.appendChild(dataCell);
  }
  table.appendChild(dataRow);

  return table;
}

/* Function for creating column error table */
function createSuccessfulTable() {
  const table = document.createElement("table");

  // Create table data row
  const dataRow = document.createElement("tr");
  const dataCell = document.createElement("td");
  // Line X incorrect
  dataCell.textContent = "The table is correct";
  dataRow.appendChild(dataCell);
  table.appendChild(dataRow);

  return table;
}

/* Function for checking lines */
function checkLines() {
  flag = 0;
  for (var i = 0; i < 9; i++) {
    console.log(array_number[i]);
    console.log(verifyPosition(array_number[i]));
    if (verifyPosition(array_number[i]) === false) {
      const table2 = createLineErrorTable(i);
      table2.setAttribute("border", "2");

      const tableContainer2 = document.getElementById("table-container2");
      tableContainer2.appendChild(table2);
      flagGlobal = 1;
    }
  }
}

/* Function for checking columns */
function checkColumns() {
  flag = 0;
  for (var i = 0; i < 18; i += 2) {
    colLine = "";
    for (var j = 0; j < 9; j += 1) {
      colLine = colLine + array_number[j][i];
    }
    /*console.log(colLine);*/
    if (verifyPositionCols(colLine) === false) {
      const table2 = createColumnErrorTable(i / 2 + 1, "Column");
      table2.setAttribute("border", "2");

      const tableContainer2 = document.getElementById("table-container2");
      tableContainer2.appendChild(table2);
      flagGlobal = 1;
    }
  }
}

/* Function for checking regions */
function checkEntity(
  entityName,
  entityNo,
  startCol,
  endCol,
  startLine,
  endLine
) {
  colLine = "";
  for (var i = startCol; i < endCol; i += 2) {
    for (var j = startLine; j < endLine; j += 1) {
      colLine = colLine + array_number[j][i];
    }
  }
  console.log(colLine);
  if (verifyPositionCols(colLine) === false) {
    const table2 = createColumnErrorTable(entityNo, entityName);
    table2.setAttribute("border", "2");

    const tableContainer2 = document.getElementById("table-container2");
    tableContainer2.appendChild(table2);
  }
}

flagGlobal = 0;
/* Checks to see if all lines are correct  */
checkLines();
/* Checks to see if all columns are correct */
checkColumns();
/* Checks to see if region 1 is correct -- fill in start column * 2, (end column + 1) * 2, start line and end line */
checkEntity("Region", 1, 0, 6, 0, 3);
/* Checks to see if region 2 is correct  */
checkEntity("Region", 2, 6, 12, 0, 3);
/* Checks to see if region 3 is correct  */
checkEntity("Region", 3, 12, 18, 0, 3);
/* Checks to see if region 4 is correct */
checkEntity("Region", 4, 0, 6, 3, 6);
/* Checks to see if region 5 is correct */
checkEntity("Region", 5, 6, 12, 3, 6);
/* Checks to see if region 6 is correct */
checkEntity("Region", 6, 12, 18, 3, 6);
/* Checks to see if region 7 is correct */
checkEntity("Region", 7, 0, 6, 6, 9);
/* Checks to see if region 8 is correct */
checkEntity("Region", 8, 6, 12, 6, 9);
/* Checks to see if region 9 is correct */
checkEntity("Region", 9, 12, 18, 6, 9);

console.log("flagGlobal " + flagGlobal);
if (flagGlobal === 0) {
  const table2 = createSuccessfulTable();
  table2.setAttribute("border", "2");

  const tableContainer2 = document.getElementById("table-container2");
  tableContainer2.appendChild(table2);
  flagGlobal = 1;
}
