// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// function descendingOrder(n) {
//   return +(numArr = n.toString().split('').map(Number).sort().reverse()).join('');
// }

function descendingOrder(n) {
  return +String(n).split('').sort().reverse().join('');
}

console.log((descendingOrder(0), 0));
console.log((descendingOrder(1), 1));
console.log((descendingOrder(123456789), 987654321));
