
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


var int1 = +prompt("enter first integer");
var int2 = +prompt("enter second integer");

if(int1>int2){
    alert(int1+" is greater");
}

else if(int2>int1){
    alert(int2+" is greater");
}

else{
    alert("Both integers are equal");
}




// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


var num = prompt("Enter a number");

if(num===0){
    alert("it's is a zero");
}
else if(num>=1){
    alert("it's a positive number")
}
else if(num<0){
    alert("it's a negative number")
}
else{
    alert("please enter number only");
}



// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

var vowel = prompt("Enter a charachter in lowercase");

if(vowel=='a' || vowel=='e' || vowel=='i' || vowel=='o' || vowel=='u'){
    alert("it's a vowel");
}
else{
    alert("not a vowel");
}




// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var correctpassword = "iamNewstudent10";
var jspassword = prompt("Enter your password");

if(jspassword===correctpassword){
    alert("correct password");
}

else if(jspassword!==correctpassword){
    alert("wrong password");
}

else{
    alert("please enter password");
}





// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";}


var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
};




// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = +prompt("Enter time in this format i.e if want 7pm enter 1900");


if(time>=0 && time<1200){
    console.log("Good morning");
}
else if(time>=1200 && time<1700){
    console.log("Good afternoon");
}
else if(time>=1700 && time<2100){
    console.log("Good evening");
}
else if(time>=2100 && time<=2359){
    console.log("Good night");
}
else{
    console.log("Please enter according to format");
}
