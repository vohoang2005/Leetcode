// Very clear way of comparing the mirror.
var isSymmetric = function(root) {
  if(root === null) return true; 

    return symmetryChecker(root.left, root.right);
  };
  function symmetryChecker(left, right) {
      if(left == null && right == null) return true;
      if(left == null || right == null) return false;
      if(left.val !== right.val) return false;

      return symmetryChecker(left.left, right.right) && symmetryChecker(left.right, right.left);
}

// Simplify way.
var isSymmetric = function(root) {
  return helper(root, root)
};

const helper = function(p, q) {
  if (p == null && q == null)
      return true
  if (p == null || q == null)
      return false
  return p.val == q.val && helper(p.left, q.right) && helper(p.right, q.left)
}