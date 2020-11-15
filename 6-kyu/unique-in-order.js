// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = (str) => {
  // if (Array.isArray(str)) {
  //   const type = str.every((i) => typeof i === 'string');
  //   return checkUniqueInOrder(str, type);
  // } else {
  //   const splitedString = str.split('');
  //   const type = splitedString.every((i) => typeof i === 'string');
  //   return checkUniqueInOrder(splitedString, type);
  // }

  return [...str].filter((e, i) => e !== str[i - 1]);
};

// const checkUniqueInOrder = (splitedString, type) => {
//   let lastStringChar = null;
//   for (let [index, character] of Object.entries(splitedString)) {
//     if (character === lastStringChar) {
//       splitedString[index] = null;
//     } else {
//       lastStringChar = character;
//     }
//   }

//   if (type) {
//     return splitedString.join('').split('');
//   } else {
//     return splitedString.join('').split('').map(Number);
//   }
// };

console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D']);
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
