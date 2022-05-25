var person = {
  firstName : 'Mike',
  lastName : 'Smith'
}

console.log(person);
console.log(person.firstName);

//if property contains space, place it inside quotes

var address = {
  'building no' : 5645,
  street: 'Jones Branch',
  state: 'VA',
  country: 'USA'
}

console.log(address['building no']);
console.log(address['state']);

//Edit a new property value
person.age =30;
console.log(person);

//delete property
delete person.age;
console.log(person);

//checking if property exists
console.log('street' in address);

//Iterating over properties of an object
var course = {
  name : 'JS Training',
  url : 'www.enesfer.com',
  subjects : ['es5','es6','js','ts']
}

for(var key in course){
  console.log(key);
}


for(var key in course){
  if(key == 'subjects'){
    console.log(key + ":" + course[key]);
  }
}




//Example
var myHonda = {
color : 'red',
wheels : 4,
engine : {
  cylinders : 4,
  size : 2.2
  },
hp : [300,500,100]
}

console.log(myHonda.engine);
console.log(myHonda.engine.size);


var car ={
  make : 'Honda',
  model : 'Civic',
  year : 2000,
  color: 'Red',
  mileage : 75000,
  started : false,
  start : function(){
    this.started = true;
  },
  drive : function(){
    if(this.started){
      console.log('It is running');
    }else{
      console.log('You need to start the car first');
    }
  }
}
car.drive();
car.start();
