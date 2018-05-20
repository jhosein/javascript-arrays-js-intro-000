var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

function addElementToBeginningOfArray(inBoundArray, element) {
  var newArray = [element, ...inBoundArray];

  return newArray;
}


function destructivelyAddElementToBeginningOfArray(inBoundArray, element) {
    inBoundArray.unshift(element);

   return inBoundArray;
}

function addElementToEndOfArray(inBoundArray, element) {
  var newArray = [...inBoundArray, element]; //creates new array instead of altering existing

  return newArray;
}
