//creating a class and objects

class Car{}
const honda = new Car();
console.log(honda instanceof Car);

//constructor : mechanism to instinciate of your object values

//constructor
class Student {
  constructor(id,name){
    this.id = id;
    this.name = name;
  }

  study(){
    console.log(`${this.name} is studying`);
  }


  static doHomework(){
    console.log(`${this.name} is doing homework`);
  }

}

let s1 = new Student(17,'Mike');
console.log(`Student ID: ${s1.id}, Student Name: ${s1.name}`)
s1.study();

//static variables
Student.age = 20;
console.log(Student);

//static method
Student.doHomework();

//s1.doHomework(); //will throw error because you need to call static method with class name


//only inheritance is available
//inheritance

class Animal{
  constructor(name){
    this.name = name;
  }
  eat(){
    console.log("Animal is eating");
  }
}

class Dog extends Animal{
  constructor(name,age){
    super(name);
    this.age = 4;
  }

eat(){ //we need to override to execute parent eat behaviour from object
  super.eat();
  console.log(`${this.name} is eating`);
}

}

const d = new Dog('Puppy');
console.log(d);
console.log(d.eat());
console.log();
