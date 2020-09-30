// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split('')
      .map((e) => Math.pow(e, 2))
      .join('')
  );
}

// function squareDigits(num) {
//   return Number(
//     ('' + num)
//       .split('')
//       .map(function (val) {
//         return val * val;
//       })
//       .join('')
//   );
// }

// function squareDigits(num) {
//   return +num
//     .toString()
//     .split('')
//     .map((i) => i * i)
//     .join('');
// }

console.log((squareDigits(9119), 811181));
