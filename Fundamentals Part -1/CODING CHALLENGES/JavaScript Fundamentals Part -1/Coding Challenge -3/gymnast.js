/*Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106*/


//score of dolphins
const scoreDolphins_1 = Number(prompt("Enter the score 1 of Dolphins: "));
const scoreDolphins_2 = Number(prompt("Enter the score 2 of Dolphins: "));
const scoreDolphins_3 = Number(prompt("Enter the score 3 of Dolphins: "));


//score of koalas
const scoreKoalas_1 = Number(prompt("Enter the score 1 of Koalas: "));
const scoreKoalas_2 = Number(prompt("Enter the score 2 of Koalas: "));
const scoreKoalas_3 = Number(prompt("Enter the score 3 of Koalas: "));

const averageDolphins = (scoreDolphins_1 + scoreDolphins_2 + scoreDolphins_3) / 3;
const averageKoalas = (scoreKoalas_1 + scoreKoalas_2 + scoreKoalas_3) / 3;

alert(`Average Score of Dolphins:${averageDolphins} `);
alert(`Average Score of Koalas:${averageKoalas} `);


if ((averageDolphins >= 100) && (averageDolphins > averageKoalas)) {
    alert("Therefore, Team Dolphins is the winner!");
} else if ((averageDolphins === averageKoalas) && (averageDolphins >= 100)) {
    alert("Hurray! It's a Draw ; Everyone is winner!");
} else if ((averageKoalas >= 100) && (averageKoalas > averageDolphins)) {
    alert("Therefore, Team Koalas is the winner!");
} else {
    alert(" Hence, no team is qualified.");
}

//END OF CODE
