/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. */

//DATA-1

/*let weightJohn = 92;
let heightJohn = 1.95;
let weightMark = 78;
let heightMark = 1.69;*/

//DATA-2

weightJohn = 85;
heightJohn = 1.76;
weightMark = 95;
heightMark = 1.88;

bmiMark = weightMark / (heightMark * heightMark);

bmiJohn = weightJohn / (heightJohn * heightJohn);

markHigherBMI = bmiMark > bmiJohn;

console.log("BMI of Mark : ", bmiMark);
console.log("BMI of John : ", bmiJohn);
console.log("Is BMI of Mark greater than BMI of John ?", markHigherBMI);







