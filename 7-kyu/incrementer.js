// https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/javascript

const incrementer = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + i + 1;
    if (nums[i].toString().split('').length > 1) {
      nums[i] = +nums[i].toString().split('').slice(-1);
    }
  }
  return nums;
};

// console.log(incrementer([1, 2, 3]), [2, 3, 4];
// console.log(incrementer([4, 6, 7, 1, 3]), [5, 8, 0, 5, 8]);
// console.log(incrementer([3, 6, 9, 8, 9]), [4, 7, 10, 9, 10]);

// Best solution
function incrementer(num) { 
  return num.map((a,i) => (a+i+1)%10);
}