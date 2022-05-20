//creating array

var scores = new Array(); //empty
var numbers = new Array(10); //Array with initial size 10
var myNumbers =new Array(9,10,4,5);

var athletes = Array(3); //Array with initial size 3
var signs = ('Red'); //Array with one Element

var emptyArray = [];
var colors = ['red','green','blue']

console.log(colors+'\n');

//Accessing array elements
var students = ['Mike','Tim','Ozzy'];
console.log(students);
console.log(students.toString());
console.log(students[0]+'\n');

//Basic operations on Arrays
students.push('Emma'); //adds element to end of an array which you cant do in Java
console.log(students);

students.unshift('Adam'); //removes specific element
console.log(students);

students.pop();//removes an element from the end of an Arrays
console.log(students);

students.shift(); //removes an element from the begining of the Arrays
console.log(students);

console.log("index of Tim is : "+students.indexOf('Tim'));

students.splice(0,1); //delete elements in Array - go to index 0 and delete 1 item
console.log(students);

students.splice(2,0,'Matt'); //instert element - go to index 2 and inster elements
console.log(students);

students.splice(1,1,'Enes');//go to index 1 delete it and instert new value
console.log(students+'\n');


//sort method
var array = [1,30,4,21];
console.log(array.sort()); //cast elements to string and compares the strings to determine the orders
console.log(array); //method also assigns
