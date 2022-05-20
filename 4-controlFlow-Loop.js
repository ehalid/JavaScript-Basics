//for loop

for(var counter =1; counter <5; counter++){
  console.log("Inside the loop : " + counter);
}

console.log('Outside the loop : ' + counter);  // variable is not belong to block. var is global and function scope.
                                              //  if its declared in function it belongs to function , if its declared in globe it belongs to globe.

//Nested Loop

for(var i = 0; i<5; i++){
console.log("outer loop at state: " + i);
for(var j = 0; j<2; j++){
  console.log("inner loop at state: "+j);
  if(j==1){
    console.log("\n");
  }
}

}

//while loop

var count = 1;
while(count < 5){
  console.log(count);
  count+=2;
}
console.log("\n");

//break
for(i=1;i<10;i++){
  if(i%3 ==0)
    break;
}
console.log(i);

//break nested loop
 outer: for(var i = 0; i<5; i++){
console.log("outer loop at state: " + i);
 inner: for(var j = 0; j<2; j++){
  if(i>=3)
    break inner;
  console.log("inner loop at state: "+j);
  if(i==4)
  break outer;
}
}

console.log('Exited when inner :'+j+" outer : "+i); //executing for line one last time when checking condition ,
console.log("\n");                                                //it increase i value and return wrong respond



//Continue
var start = 2;
var sum = 0;

do{
  if(start %2 ==0)
  continue;
  sum+=start
}while (++start <=10);

console.log(sum);
