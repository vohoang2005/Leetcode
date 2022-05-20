// Vanilla Solution
var majorityElement = function(nums) {
    let i = [];
    for(let j = 0; j < nums.length; j++) {
     console.log( i[nums[j]] = i[nums[j]] + 1 || 1);
       if(i[nums[j]] > nums.length/2) return nums[j]
    }  
  };
  