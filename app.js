// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

document.write("Task 1" + "<br />");

var num = +prompt();
document.write("Number: " + num + "<br />");

var a = Math.round(num);
document.write("roundoff: " + a + "<br />");

var b = Math.floor(num);
document.write("floor: " + b + "<br />");

var c = Math.ceil(num);
document.write("ceil: " + c + "<br /><br />");




// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


document.write("Task 2" + "<br />");

var num2 = +prompt("enter a negative floating number");
document.write(num2 + "<br />");

var a2 = Math.round(num2);
document.write("roundoff: " + a2 + "<br />");

var b2 = Math.floor(num2);
document.write("floor: " + b2 + "<br />");

var c2 = Math.ceil(num2);
document.write("ceil: " + c2 + "<br /><br />");




// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
document.write("Task 3" + "<br />");

var num3 = +prompt("enter a number");
var a3 = Math.abs(num3);
document.write("absolute value of " + num3 + " is " + a3 + "<br /><br />");



// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
document.write("Task 4: Dice" + "<br />");

var a4 = Math.floor(Math.random() * 6) + 1;
document.write("random dice value: " + a4 + "<br /><br />");






// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
document.write("Task 5: coin toss" + "<br />");


var cointoss = Math.floor(Math.random() * 2) + 1;

if(cointoss == 1){
    document.write("Random coin value: Heads");
}
else{
    document.write("Random coin value: Tails");
}
document.write("<br /><br />");




// 6. Write a program that shows a random number between 1
// and 100 in your browser.
document.write("Task 6" + "<br />");



var value100 = Math.floor(Math.random() * 100) + 1;
document.write("Random value between 1 to 100: " + value100);

document.write("<br /><br />");




// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
document.write("Task 7" + "<br />");



var weight = +prompt("Enter your weight in kilograms");
document.write(weight + "<br />");
document.write(weight + "kgs<br />");

var d = (weight).toFixed(2);
document.write(d + "kgs" + "<br />");

document.write(d + "kilograms" + "<br />");

document.write("<br /><br />");





// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
document.write("Task 8: Number guessing game" + "<br />");



var rand10num = Math.floor(Math.random() * 10) + 1;
var guess = +prompt("Guess a number from 1 to 10");

if(guess == rand10num){
    document.write("Congratulations you guessed it right");
}
else{
    document.write("oops! You got it wrong");
}







