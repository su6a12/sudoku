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


  // gets values for row
  function getValues(row) {
    var values = [];
    for(var i = 0; i < row.length; i++){
      values.push(row[i].value);
    }
    return values;
  };

  // add listener to row1
  for(var i = 0; i < row1.length; i++) {
    row1[i].addEventListener('input', function(){
      allValues      = getValues(row1)
      console.log(allValues);
      numbersOnly    = allValues.filter(Number);
      originalLength = numbersOnly.length;
      uniqLength     = uniqNumbers(numbersOnly).length;

      // if uniqLength < originalLength it means there are duplicate numbers
      // highlight row red
      if(uniqLength < originalLength) {
        for(var i = 0; i < row1.length; i++) {
          row1[i].style.backgroundColor = "red";
          row1[i].style.color = "white";
        };
      // if uniqLength == originalLength that means they are unique numbers
      // reset background color if there is no value
      // otherwise change it
      } else if (uniqLength == originalLength) {
        for(var i = 0; i < row1.length; i++) {
          if (row1[i].value != 0) {
            row1[i].style.backgroundColor = "blue";
            row1[i].style.color = "white";
          } else {
            row1[i].style.backgroundColor = "white";
            row1[i].style.color = "black";
          }
        };
      };
    });
  };

  // find uniq numbers
  function uniqNumbers(ary) {
    return ary.reduce(function(a,b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);
  };
};