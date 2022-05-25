function add(a,b){
  console.log('Total is : '+(a+b));
}

add(10,20);


function multiply(a,b){
  return (a*b);
}

console.log(multiply(10,20));

add(4,5);
add(10,20,40);//ignores additional data, take only how many in the array
add(4);//Throws error for mising value, there is no value to add

//Overloading
// function addTen(a,b){
//   return(a+b+10);
// }
// function addTen(a){
//   return a+10;
// }
//
// var x = addTen(10,20);
// console.log(x); //Throws error because overloading doesnt have in javascript but typeScript have it


//Functions are the first-class citizens in JS.
//You can pass functions to other functions as arguments
//You can return functions for other Functions
//You can store functions in variables

var add2 = add;
add2(100,300);

var add3 = add(100,200);


//Anonymous functions : function without name

var show = function() {
  console.log('This is function without name');
}

show();

var divide = function(a,b){
  return a/b;
}
var d= divide(20/10);
console.log(d);



//Passomg a function to another function
function sum(a,b){
  return a+b;
}

function average(a,b,fn){
  return fn(a,b)/2;
}


var res = average(10,20,sum);
console.log(res);


//Example
function cmToInch(length){
  return length/2.54;
}
function inToCM(length){
  return length * 2.54;
}
function convert (fn,length){
  return fn(length);
}
var inches = convert(cmToInch,10);
var cm = convert(inToCM,10);


//CallBack Functions : A callback is a function passed as an argument to another functions
//A callback function can run after another function has finished


function myDisplayer(some){
  console.log(some);
}

function myCalculator(num1,num2){
  var sum = num1 + num2;
  myDisplayer(sum);
}
