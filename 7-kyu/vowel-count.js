// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const stringSplited = str.split('');
  for (let i = 0; i < stringSplited.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (stringSplited[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}

console.log((getCount('abracadabra'), 5));

