//when cell is highlighted, add css
//define cell highlighted css to have blue background

function changeColor(scope) {
  var inputValue = scope.value;
  console.log("this is the scope:");
  console.log(inputValue);
  console.log(scope);
  //if there is an input, change background color and text color
  if (/[1-9]/.test(inputValue)) {
    if (inputValue != "" && scope.style.backgroundColor != "red"){
       scope.style.backgroundColor = "blue";
       scope.style.color = "white";
    }
  }
  //if cell is blank, change background color and text color back to original
  else if (inputValue === "") {
    console.log('else statement here');
    scope.style.backgroundColor = "white";
    scope.style.color = "black";
  }
  else {
    scope.value = "";
    console.log("please enter a number between 0 and 9.");
  }

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
};
