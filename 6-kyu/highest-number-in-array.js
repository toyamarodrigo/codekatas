// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

var arr = [12, 10, 10, 10, 10, 8, 12, 7, 6, 4, 10, 12, 12];

const highestRank = (arr) => {
  console.log(arr.sort((a,b) => arr.filter(i => i === b).length - arr.filter(i => i === a).length)[0])
  
  // return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
}


// function highestRank(arr) {
//   let obj = {};
//   let max = 0;
//   let maxNum = 0;

//   arr.forEach((el) => {
//     if (obj[el]) {
//       obj[el]++;
//     } else {
//       obj[el] = 1;
//     }
//   });

//   for (let char in obj) {
//     if (obj[char] >= max) {
//       max = obj[char];
//       maxNum = Number(char);
//     }
//   }

//   return maxNum;
// }

console.log((highestRank(arr), 12));
