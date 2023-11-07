//* Veriry all are numbers if numeric and if different from each other - FOR LINES
function verifyPosition(tableRow) {
  var flag = 0;
  for (var i = 0; i < 18; i += 2) {
    if (
      tableRow[i] !== "1" &&
      tableRow[i] !== "2" &&
      tableRow[i] !== "3" &&
      tableRow[i] !== "4" &&
      tableRow[i] !== "5" &&
      tableRow[i] !== "6" &&
      tableRow[i] !== "7" &&
      tableRow[i] !== "8" &&
      tableRow[i] !== "9"
    ) {
      flag = 1;
      break;
    }
  }

  if (flag === 0) {
    for (var i = 0; i < 18; i += 2) {
      var counter = 0;
      for (j = 0; j < 18; j += 2) {
        if (tableRow[i] === tableRow[j]) {
          counter++;
        }
        if (counter > 1) {
          flag = 1;
          break;
        }
      }
      if (flag === 1) {
        break;
      }
    }
  }

  if (flag === 1) {
    return false;
  } else {
    return true;
  }
}
//*/

/* Veriry all are numbers if numeric and if different from each other - FOR COLUMNS */
function verifyPositionCols(tableRow) {
  var flag = 0;
  for (var i = 0; i < 9; i += 1) {
    if (
      tableRow[i] !== "1" &&
      tableRow[i] !== "2" &&
      tableRow[i] !== "3" &&
      tableRow[i] !== "4" &&
      tableRow[i] !== "5" &&
      tableRow[i] !== "6" &&
      tableRow[i] !== "7" &&
      tableRow[i] !== "8" &&
      tableRow[i] !== "9"
    ) {
      flag = 1;
      break;
    }
  }

  if (flag === 0) {
    for (var i = 0; i < 9; i += 1) {
      var counter = 0;
      for (j = 0; j < 9; j += 1) {
        if (tableRow[i] === tableRow[j]) {
          counter++;
        }
        if (counter > 1) {
          flag = 1;
          break;
        }
      }
      if (flag === 1) {
        break;
      }
    }
  }

  if (flag === 1) {
    return false;
  } else {
    return true;
  }
}
