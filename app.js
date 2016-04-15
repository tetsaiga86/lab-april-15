function sum(numOne, numTwo){
  var sum = numOne + numTwo;
  //console.log('"The sum of ' + numOne + ' and ' + numTwo + ' is ' + sum + '."');
  return sum;
}

function multiply(numOne, numTwo){
  var product = numOne * numTwo;
  //console.log('"The product of ' + numOne + ' and ' + numTwo + ' is ' + product + '."');
  return product;
}

function sumAndMultiply(numOne, numTwo, numThree){
  var x = sum(sum(numOne, numTwo), numThree);
  var y = multiply(multiply(numOne, numTwo), numThree);
  console.log('"' + numOne + ' and ' + numTwo + ' and ' + numThree + ' sum to ' + x);
  console.log('"The numbers ' + numOne + ' and ' + numTwo + ' and ' + numThree + ' have a product of ' + y + '"');
}

function sumArray(adding){
  var sum = (adding[0] + adding[1] + adding[2]);
  console.table(adding);
  console.log('"' + adding[0] + ',' + adding[1] + ',' + adding[2] + ' was passed in as an array of numbers, and ' + sum + ' is their sum."');
}
