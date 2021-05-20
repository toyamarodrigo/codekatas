vowels = ['a', 'e', 'i', 'o', 'u'];

const encode = (string) => {
  return [...string]
    .map((char) => (vowels.includes(char) ? vowels.indexOf(char) + 1 : char))
    .join('');
};

const decode = (string) => {
  return [...string]
    .map((char) => (Number(char) ? vowels[Number(char) - 1] : char))
    .join('');
};

console.log(encode('hello'), 'h2ll4');
console.log(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
console.log(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
console.log(decode('h2ll4'), 'hello');
