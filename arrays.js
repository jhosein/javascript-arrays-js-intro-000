var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

function addElementToBeginningOfArray(inBoundArray, element) {
  var newArray = [element, ...inBoundArray];

  return newArray;
}


//function destructivelyAddElementToBeginningOfArray(inBoundArray, element) {
//    newArray = [...inBoundArray, element];

//    return newArray;
//}
