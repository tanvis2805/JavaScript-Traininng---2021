/* CODING CHALLENGE # 1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time */

"use strict";

function calcAverage(score_1, score_2, score_3) {
  const average = (score_1 + score_2 + score_3) / 3;
  return average;
}
// DATA 1
// let avgDolphin = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

//DATA 2
let avgDolphin = calcAverage(85, 54, 41);
let avgKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphin, avgKoalas) {
  if (avgDolphin >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphin} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphin) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphin})`;
  } else {
    return `NOBODY IS A WINNER`;
  }
}

alert(checkWinner(avgDolphin, avgKoalas));
