// https://www.codewars.com/kata/563700da1ac8be8f1e0000dc/train/javascript

const maxRedigit = (num) => {
  if (num <= 0) return null;
  const number = +num.toString().split('').sort().reverse().join('');
  const numberLength = number.toString().split('').length
  if (numberLength !== 3) return null;
  return number
};

console.log(maxRedigit(123), 321);
