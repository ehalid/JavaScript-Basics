let mid = [3,4];
let arr = [1,2,...mid,5,6];
console.log(arr);

let str = 'Hello';
var chars = [...str];
console.log(chars);

//Rest operators collects all elements into Array
function func(...theArgs){
  console.log(theArgs.length);
}

func();
func(5);
func(5,6,7);


function multiply(multiplier,...theArgs){
  return theArgs.map(element => multiplier * element);
}

let array = multiply(2,15,25,42);
console.log(array);
