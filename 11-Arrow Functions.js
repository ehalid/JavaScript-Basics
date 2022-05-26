//es5
let x = function (a){
  return a;
}
//es6
let c = a => a;

//If we do not have any parameters
let y = function(){
  console.log('hello');
}

let z = () =>{console.log('hello');}
z();

//if we have multiple parameters
let j = (a,b,c)=> a+b+c;
console.log(j(2,4,7));


//multiline arrow Functions
let sum = (a,b) => {
  let result = a+b;
  return result;
}

console.log(sum(4,6));

let total = arr => arr.reduce((a,b) => a+b//,5 -< starting number if you dont put its 0
);
let arr = [5,10,20];

console.log(total(arr));
/*
what reduce do is
//first take 0 and first element
0+5 =5
5+10 = 15,
15+20 = 35,
*/

//map() method : craetes a new array with the results of calling a prvided function
//on every element in the calling Array
const map1 = arr.map(x=>x*2);
console.log(map1);

//for..of : creates a loop iterating over a iterable objects
let myfruits = ["apple", 'Orange','Banana'];
for(let value of myfruits){
  console.log(value);
}
