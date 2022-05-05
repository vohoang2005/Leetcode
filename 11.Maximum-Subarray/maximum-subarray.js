// Nice trick solution, but Runtime and Memory is not so great.

var maxSubArray = function(nums) {
    for (let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    return Math.max(...nums);
};

// Better solution, Runtime and Memory is good and easier to understand.

var maxSubArray = function(nums) {
    let res = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
        if(nums[i] > res){
           res = nums[i]
        }
    }
    return res;
};