/* 
Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
Note: a and b are not ordered!

GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

function GetSum( a,b ){
  let sum = 0;
  if( a == b ){
    return a;
  } else if ( a < b ) {
    for (let i=a ; i<=b ; i++) {
      sum = sum+i;
    }
  } else {
    for (let i=b ; i<=a; i++) {
      sum = sum+i;
    }
  }
  return sum;
}

// Best Practice (Arithmetic Progression)
// It's the average of the first and last number multiplied by the count of numbers
// (1 + 3 + 5) is 
// [(1 + 5) / 2] * 3
// 3 * 3 = 9

const GetSum1 = (a, b) => {
  let min = Math.min(a, b), 
  max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

console.log(GetSum(0,0),0); 
console.log(GetSum(0,1),1);
console.log(GetSum(0,-1),-1);
console.log(GetSum(1,10));
console.log(GetSum(-5,-2));

console.log(GetSum1(2,10))