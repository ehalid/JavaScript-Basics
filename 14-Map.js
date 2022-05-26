let map = new Map();

map.set('1','str1');
map.set(1,'num1');
map.set(true,'bool1');

console.log(map.size);
console.log(map);
console.log(map.get(1));
console.log(map.get(true));


//Map can use objects as keys
let student = {name:'Mike',age:20};
let visits=new Map();
visits.set(student,100);
console.log(visits.get(student));

//Map can use functions as keys
let fun = function(){console.log('Hello');}
visits.set(fun,'This is function');
console.log(visits.get(fun));


//chaining
let myCars = new Map();
myCars.set(1,'Honda')
      .set(2,'GM');

console.log(myCars.get(2));


//Iteration over keys
for(let car of myCars.keys()){
  console.log(car);
}

//iteration over values
for(let value of myCars){
  console.log(value);
}

for(let [key,value] of myCars){
  console.log(key + '=' + value);
}

myCars.forEach((value,key)=> {console.log(key + ":" + value);})
