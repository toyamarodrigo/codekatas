https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript

function prefill (n, v){
  +n;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(v);
  }
  return arr.length ? arr : `${n} is invalid`;
}

console.log(prefill(3,1),[1,1,1]);
    
console.log(prefill(2,"abc"),['abc','abc']);

console.log(prefill("1", 1),[1]);

console.log(prefill(3, prefill(2,'2d')),[['2d','2d'],['2d','2d'],['2d','2d']]);
  
console.log(prefill("xyz", 1),"error");