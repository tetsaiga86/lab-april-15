function sum(numOne, numTwo){
  var sum = numOne + numTwo;
  var p1 = document.getElementById('p1');
  //console.log('"The sum of ' + numOne + ' and ' + numTwo + ' is ' + sum + '."');
  p1.textContent = '"The sum of ' + numOne + ' and ' + numTwo + ' is ' + sum + '."';
  return sum;
}

function multiply(numOne, numTwo){
  var product = numOne * numTwo;
  var p2 = document.getElementById('p2');
  //console.log('"The product of ' + numOne + ' and ' + numTwo + ' is ' + product + '."');
  p2.textContent = '"The product of ' + numOne + ' and ' + numTwo + ' is ' + product + '."';
  return product;
}

function sumAndMultiply(numOne, numTwo, numThree){
  var x = sum(sum(numOne, numTwo), numThree);
  var y = multiply(multiply(numOne, numTwo), numThree);
  var p31 = document.getElementById('p3.1');
  var p32 = document.getElementById('p3.2');
  p31.textContent = '"' + numOne + ' and ' + numTwo + ' and ' + numThree + ' sum to ' + x;
  p32.textContent = '"The numbers ' + numOne + ' and ' + numTwo + ' and ' + numThree + ' have a product of ' + y + '"';
}

function sumArray(adding){
  var sum = (adding[0] + adding[1] + adding[2]);
  var p4 = document.getElementById('p4');
  console.table(adding);
  p4.textContent = '"' + adding[0] + ',' + adding[1] + ',' + adding[2] + ' was passed in as an array of numbers, and ' + sum + ' is their sum."';
}

function multiplyArray(m){
  var mul = (m[0], m[1], m[2]);
  var p5 = document.getElementById('p5');
  console.table(m);
  p5.textContent = '"The numbers ' + m[0] + ', ' + m[1] + ', ' + m[2] + ' have a product of ' + mul + '."';
}
