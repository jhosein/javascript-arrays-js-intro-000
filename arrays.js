var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

function addElementToBeginningOfArray(inBoundArray, element) {
  inBoundArray.unshift(element);

  return inBoundArray;
}


function destructivelyAddElementToBeginningOfArray(inBoundArray, element) {
    newArray = [...inBoundArray, element];

    return newArray;
}
