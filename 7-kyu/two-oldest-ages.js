// https://www.codewars.com/kata/511f11d355fe575d2c000001

// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].
// The order of the numbers passed in could be any order. The array will always include at least 2 items.
// For example:
// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]
// return the two oldest/oldest ages within the array of ages passed in.

function twoOldestAges(ages) {
  return ages
    .sort((a, b) => b - a)
    .reverse()
    .splice(-2);
}

const twoOldestAges = (ages) => {
  return ages
    .sort((a, b) => b - a)
    .reverse()
    .splice(-2);
};

const twoOldestAges = (ages) => {
  return ages.sort((a, b) => a - b).splice(-2);
};

console.log(twoOldestAges([1, 2, 10, 8]));
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
