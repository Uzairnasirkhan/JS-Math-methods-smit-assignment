// CHAPTER 17 & 18 (ARRAYS & LOOP)


// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var a = [[],[],[]];


// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var matrixArray = 
[[0,1,2,3] ,
 [1,0,1,2] ,
 [2,1,0,1]];
console.log(matrixArray);


// 3. Write a program to print numeric counting from 1 to 10.

for(var i=1; i<=10; i++){
    console.log(i)
}


// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var tableNum = +prompt("enter a number for multiplication table");
var tablelength = +prompt("enter table lenght");

for(var i=1; i<=tablelength; i++){
    console.log(tableNum+ " x "+i+ " = " +tableNum*i);
}



// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var fruits = ["apple" , "banana" , "mango" , "orange" , "strawberry"];

for(var i=0; i<=4; i++){
    console.log(fruits[i]);
}

for(var i=0; i<=4; i++){
    console.log("Element at index "+i+" is "+fruits[i]);
}



// 6. Generate the following series in your browser. See
// example output.


// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
for(var i=1; i<=15; i++){
    document.write(i+" ")
}
document.write("<br />");



// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
for(var i=10; i>=1; i--){
  document.write(i+" ")
}
document.write("<br />");



// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
for(var i=1; i<=20; i++){
  if(i%2==0){
    document.write(i)
  }
  else{
    document.write(" ")
  }
}
document.write("<br />");



// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
for(var i=1; i<=20; i++){
    if(i%2==!0){
      document.write(i)
    }
    else{
      document.write(" ")
    }
  }
  document.write("<br />");




// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
for(var i=1; i<=20; i++){
    if(i%2==0){
      document.write(i+"k")
    }
    else{
      document.write(" ")
    }
  }
  





