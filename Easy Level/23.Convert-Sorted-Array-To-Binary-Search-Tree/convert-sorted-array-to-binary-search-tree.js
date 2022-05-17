// Very detailed solution.
var sortedArrayToBST = function(nums) {
    
    function sortedArrayToBSTHelper(nums, start, end){
        if(start > end){
            return null
        }
        
        let mid = Math.floor((start + end)/2)
        let node = new TreeNode(nums[mid])
        node.left = sortedArrayToBSTHelper(nums, start, mid - 1)
        node.right = sortedArrayToBSTHelper(nums, mid + 1, end)
        return node
    }
    
    return sortedArrayToBSTHelper(nums, 0, nums.length-1)
};

// A condense solution.
var sortedArrayToBST = function(nums, left = 0, right = nums.length-1) {
    if(left > right) return null;
    
    let mid = Math.floor((left+right)/2);
    let root = new TreeNode(nums[mid]);
    
    root.left = sortedArrayToBST(nums, left,mid-1);
    root.right = sortedArrayToBST(nums,mid+1,right);
    
    return root;
};