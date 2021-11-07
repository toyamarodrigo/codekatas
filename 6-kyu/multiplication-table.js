multiplicationTable = function(size) {
  let result = []
  for (let i = 0; i < size; i++) {
    result[i] = []
    for (let j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);  
    }
  }
  return result
}

/*
multiplicationTable = function(size) {
  let newArr= [];
  let arr = [];
  for (let i = 1; i <= size; i++ ) {
    for(let j = 1; j <= size; j++ ) {
      newArr.push(i*j)
    }
  }
  return newArr.map((e, i) => {
    return i % size === 0 ? newArr.slice(i, i + size) : null;
  }).filter((e) => { return e })
}
*/
