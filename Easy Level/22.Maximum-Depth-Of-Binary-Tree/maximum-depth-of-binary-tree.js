// using Math.max and maxDepth to figure out the binary tree depth.
var maxDepth = function(root) {
    if(root === null || root === undefined) {
      return 0;
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
  };

// Compressed method.
var maxDepth = function(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};