// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const even_or_odd = (number) => (number % 2 === 0 ? 'Even' : 'Odd');

console.log((even_or_odd(2), 'Even'));
console.log((even_or_odd(0), 'Even'));
console.log((even_or_odd(7), 'Odd'));
console.log((even_or_odd(1), 'Odd'));
