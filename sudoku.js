//when cell is highlighted, add css
//define cell highlighted css to have blue background
(function(){

  var row1 = document.getElementsByClassName('row1');
  var row2 = document.getElementsByClassName('row2');
  var row3 = document.getElementsByClassName('row3');
  var row4 = document.getElementsByClassName('row4');
  var row5 = document.getElementsByClassName('row5');
  var row6 = document.getElementsByClassName('row6');
  var row7 = document.getElementsByClassName('row7');
  var row8 = document.getElementsByClassName('row8');
  var row9 = document.getElementsByClassName('row9');

  allRows = [ row1, row2, row3, row4, row5, row6, row7, row8, row9 ]

  // gets values for row
  function getValues(row) {
    var values = [];
    for(var i = 0; i < row.length; i++){
      values.push(row[i].value);
    }
    return values;
  };

  // add listener to rows
  for(var i = 0; i < allRows.length; i++){
    var current_row = allRows[i];
    addListenerToRow(current_row);
  };

  function addListenerToRow(row){
    for(var i = 0; i < row.length; i++){
      row[i].addEventListener('input', function(){
        allValues      = getValues(row)
        console.log(allValues);
        numbersOnly    = allValues.filter(Number);
        originalLength = numbersOnly.length;
        uniqLength     = uniqNumbers(numbersOnly).length;

        // if uniqLength < originalLength it means there are duplicate numbers
        // highlight row red
        if(uniqLength < originalLength) {
          setRowRedColor(row);

        // if uniqLength == originalLength that means they are unique numbers
        // reset background color if there is no value
        // otherwise change it

        } else if (uniqLength == originalLength){
          setRowNormalColors(row);
        };
      });
    };
  };

  function setRowNormalColors(row){
    for(var i = 0; i < row.length; i++){
      if (row[i].value != 0){
        row[i].style.backgroundColor = "blue";
        row[i].style.color           = "white";
      } else {
        row[i].style.backgroundColor = "white";
        row[i].style.color           = "black";
      };
    };
  };

  function setRowRedColor(row){
    for(var i = 0; i < row.length; i++) {
      row[i].style.backgroundColor = "red";
      row[i].style.color = "white";
    };
  };

  // find uniq numbers
  function uniqNumbers(ary) {
    return ary.reduce(function(a,b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);
  };

// columns
  var col1 = document.getElementsByClassName('col1');
  var col2 = document.getElementsByClassName('col2');
  var col3 = document.getElementsByClassName('col3');
  var col4 = document.getElementsByClassName('col4');
  var col5 = document.getElementsByClassName('col5');
  var col6 = document.getElementsByClassName('col6');
  var col7 = document.getElementsByClassName('col7');
  var col8 = document.getElementsByClassName('col8');
  var col9 = document.getElementsByClassName('col9');

  var allCols = [ col1, col2, col3, col4, col5, col6, col7, col8, col9 ];

  // add listener to cols
  for(var i = 0; i < allCols.length; i++){
    var current_col = allCols[i];
    addListenerToCol(current_col);
  };

  function addListenerToCol(col){
    for(var i = 0; i < col.length; i++){
      col[i].addEventListener('click', function(){
        this.style.backgroundColor = "green";
      })
    };
  };
})();