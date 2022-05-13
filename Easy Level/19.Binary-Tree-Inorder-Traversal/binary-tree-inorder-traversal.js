// Easy to understand the Binary concept.
var inorderTraversal = function(root) {
    const ans = [];
    const stack = [];
    let current = root;
    while(stack.length || current) {
        if(current) {
            stack.push(current);
            current = current.left;
        } else {
            current = stack.pop();
            ans.push(current.val);
            current = current.right;
        }
    }
    return ans;
};

// Same idea, but condensed.
var inorderTraversal = function(root) {
    const result = [];
    
    function traverse(node) {
        if(!node) return;
        
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }
    traverse(root);
    return result;
};