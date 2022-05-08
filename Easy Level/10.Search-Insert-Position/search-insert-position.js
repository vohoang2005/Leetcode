// Acceptable solution, but not great in Runtime and Memory.
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
      const middle = Math.floor((end + start) / 2);
      if (nums[middle] === target) {
        return middle;
      }
      if (nums[middle] < target) {
        start = middle + 1
        continue;
      } 
      if (nums[middle] > target) {
        end = middle - 1
        continue;
      }
      return middle;
    }
    return start;
  };

// Great Solution with Great Runtime and Memory with minimal code.
var searchInsert = function(nums, target) {
    
    for(let i=0; i < nums.length; i++) {
        if(nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};