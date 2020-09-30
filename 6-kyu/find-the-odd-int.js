// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// function findOdd(arr) {
//   let obj = {};
//   let result;

//   arr.forEach((el) => {
//     if (obj[el]) {
//       obj[el]++;
//     } else {
//       obj[el] = 1;
//     }
//   });

//   for (let element in obj) {
//     if (obj[element] % 2 === 1) {
//       result = +element;
//     }
//   }

//   return result;
// }

function findOdd(arr) {
  console.log(arr.find((item) => arr.filter((el) => el === item).length % 2));
  return arr.find((item) => arr.filter((el) => el === item).length % 2);
}

function doTest(a, n) {
  console.log('A = ', a);
  console.log('n = ', n);
  console.log((findOdd(a), n));
}

doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
doTest([10], 10);
doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
