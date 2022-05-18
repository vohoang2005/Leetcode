// using DFS (Depth First Search)
var hasPathSum = function(root, targetSum) {
    if (root === null) {    
        return false;
    }
    if (root.right == null && root.left == null) {
        return targetSum === root.val;                  //If target is the same as root value, return true, if not false.
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)      //Checking on left of the root and right side of root.
};                                                                                                          //22 - root.value, until it hit Null. If root value is same
                                                                                                            //targetSum, then return true, if not, return false.

   