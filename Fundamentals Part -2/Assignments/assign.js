// //LECTURE: Functions

//  function describeCountry(country, population, capitalCity) {
//  return `${country} has ${population} million people and 
//  its capital city is ${capitalCity}`;
//  }
//  const descPortugal = describeCountry('Portugal', 10,
//  'Lisbon');
//  const descGermany = describeCountry('Germany', 83,
//  'Berlin');
//  const descFinland = describeCountry('Finland', 6,
//  'Helsinki');
//  console.log(descPortugal, descGermany, descFinland);


// //LECTURE: Function Declarations vs. Expressions

//  function percentageOfWorld1(population) {
//  return (population / 7900) * 100;
//  }
//  const percentageOfWorld2 = function (population) {
//  return (population / 7900) * 100;
//  };
//  const percPortugal1 = percentageOfWorld1(10);
//  const percChina1 = percentageOfWorld1(1441);
//  const percUSA1 = percentageOfWorld1(332);
//  console.log(percPortugal1, percChina1, percUSA1);

// //LECTURE: Arrow Functions

//  const percentageOfWorld3 = population => (population / 7900)
//  * 100;
//  const percPortugal3 = percentageOfWorld3(10);
//  const percChina3 = percentageOfWorld3(1441);
//  const percUSA3 = percentageOfWorld3(332);
//  console.log(percPortugal3, percChina3, percUSA3);

// //LECTURE: Functions Calling Other Functions
//  const describePopulation = function (country, population) {
//  const percentage = percentageOfWorld1(population);
//  const description = `${country} has ${population} million 
//  people, which is about ${percentage}% of the world.`;
//  console.log(description);
//  };
//  describePopulation('Portugal', 10);
//  describePopulation('China', 1441);
//  describePopulation('USA', 332);

// //LECTURE: Introduction to Arrays

//  const populations = [10, 1441, 332, 83];
//  console.log(populations.length === 4);
//  const percentages = [
//  percentageOfWorld1(populations[0]),
//  percentageOfWorld1(populations[1]),
//  percentageOfWorld1(populations[2]),
//  percentageOfWorld1(populations[3])
//  ];
//  console.log(percentages);


// //LECTURE: Basic Array Operations (Methods)

//  const neighbours = ['Norway', 'Sweden', 'Russia'];
//  neighbours.push('Utopia');
//  console.log(neighbours);
//  neighbours.pop();
//  console.log(neighbours);
//  if (!neighbours.includes('Germany')) {
//  console.log('Probably not a central European country :D');
//  }
//  neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
//  console.log(neighbours);

// //LECTURE: Introduction to Objects
//  const myCountry = {
//  country: 'Finland',
//  capital: 'Helsinki',
//  language: 'finnish',
//  population: 6,
//  neighbours: ['Norway', 'Sweden', 'Russia']
//  };

// //LECTURE: Dot vs. Bracket Notation

//  console.log(
//  `${myCountry.country} has ${myCountry.population} million 
//  ${myCountry.language}-speaking people, 
//  ${myCountry.neighbours.length} neighbouring countries and 
//  a capital called ${myCountry.capital}.`
//  );
//  myCountry.population += 2;
//  console.log(myCountry.population);
//  myCountry['population'] -= 2;
//  console.log(myCountry.population);

// //LECTURE: Object Methods

//  const myCountry = {
//  country: 'Finland',
//  capital: 'Helsinki',
//  language: 'finnish',
//  population: 6,
//  neighbours: ['Norway', 'Sweden', 'Russia'],
//  describe: function () {
//  console.log(
//  `${this.country} has ${this.population} million 
//  ${this.language}-speaking people, 
//  ${this.neighbours.length} neighbouring countries and a 
//  capital called ${this.capital}.`
//  );
//  },
//  checkIsland: function () {
//  this.isIsland = this.neighbours.length === 0 ? true :
//  false;

//  }
//  };
//  myCountry2.describe();
//  myCountry2.checkIsland();
//  console.log(myCountry2);


// //LECTURE: Iteration: The for Loop

//  for (let voter = 1; voter <= 50; voter++)
//  console.log(`Voter number ${voter} is currently voting`);


// //LECTURE: Looping Arrays, Breaking and Continuing

//  const populations = [10, 1441, 332, 83];
//  const percentages2 = [];
//  for (let i = 0; i < populations.length; i++) {
//  const perc = percentageOfWorld1(populations[i]);
//  percentages2.push(perc);
//  }
//  console.log(percentages2);


// //LECTURE: Looping Backwards and Loops in Loops

//  const listOfNeighbours = [
//  ['Canada', 'Mexico'],
//  ['Spain'],
//  ['Norway', 'Sweden', 'Russia'],
//  ];
//  for (let i = 0; i < listOfNeighbours.length; i++)
//  for (let y = 0; y < listOfNeighbours[i].length; y++)
//  console.log(`Neighbour: ${listOfNeighbours[i][y]}`);


//LECTURE: The while Loop

const percentages3 = [];
let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
}
console.log(percentages3);

//LECTURE : 