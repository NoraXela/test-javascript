/* Creating table and populating it with input table */

function createTable() {
  const table = document.createElement("table");

  // Create table data rows
  for (var i = 0; i < 9; i++) {
    const dataRow = document.createElement("tr");
    for (var j = 0; j < 9; j++) {
      const dataCell = document.createElement("td");
      dataCell.textContent = array_number[i][j * 2];
      dataRow.appendChild(dataCell);
    }
    table.appendChild(dataRow);
  }

  return table;
}

const table = createTable();
table.setAttribute("border", "2");

const tableContainer = document.getElementById("table-container");
tableContainer.appendChild(table);
