// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

/*const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];*/

/*function findMatching (driversArr, checkName) {
    let arr = driversArr.map(driver => driver.toLowerCase());
    let check = checkName.toLowerCase();
    let matchingNames = arr.filter((name) => name===check);
    return matchingNames;
};*/

//Drivers is an array of names
function findMatching (drivers, checkName) {
    return drivers.filter(driver => driver.toLowerCase()===checkName.toLowerCase());
}

//Drivers is an array of names
function fuzzyMatch (drivers, checkLetters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(checkLetters.toLowerCase()));
};

//Drivers is an array of object which contain a driver name, hometown etc
function matchName (drivers, checkName) {
    return drivers.filter(driver => driver.name===checkName);
}

//console.log(findMatching(drivers, "Bobby"));
//console.log(fuzzyMatch(drivers, "Sa"));
//console.log(matchName(drivers, "Bobby"));

