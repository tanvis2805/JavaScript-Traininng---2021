/*Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"*/

weightJohn = prompt("ENTER JOHN'S WEIGHT: ");
heightJohn = prompt("ENTER JOHN'S HEIGHT: ");
weightMark = prompt("ENTER MARK'S WEIGHT: ");
heightMark = prompt("ENTER MARK'S HEIGHT: ");

bmiMark = weightMark / (heightMark * heightMark);

bmiJohn = weightJohn / (heightJohn * heightJohn);

if (bmiJohn > bmiMark) {
    console.log(`John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`);
} else {
    console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`);
}