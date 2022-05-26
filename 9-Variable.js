var x = 1;

if(x==+1){
  var x = 2;
  console.log(x);
}
console.log(x);   //we should be expecting error or this print should be giving us 1 ,
                  //because what devlared in method block belogns to method methods
                  //the reason we see it 2 is var keyword is global and function scoped

let a = 1;  //now instead of var let is giving us block scope

if(a === 1){
  let a = 2;
  console.log(a);
}
console.log(a);           //now we are getting 1 as expected because second declarations should belong to block.+


const number = 50;
number = 40;
