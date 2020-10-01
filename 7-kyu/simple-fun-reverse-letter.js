// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str

// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
  return str
    .split('')
    .reverse()
    .join('')
    .replace(/([^a-zA-Z])/g, '');
}
// refactor
// reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

console.log((reverseLetter('krishan'), 'nahsirk'));
console.log((reverseLetter('ultr53o?n'), 'nortlu'));
console.log((reverseLetter('ab23c'), 'cba'));
console.log((reverseLetter('krish21an'), 'nahsirk'));
