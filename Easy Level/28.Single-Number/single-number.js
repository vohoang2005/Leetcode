// Using XOR to help resolve this problem. 
var singleNumber = function(nums) {
    let num = 0;
    for(let i = 0; i < nums.length; i++) {
        num ^= nums[i]
      }
  return num
    }
