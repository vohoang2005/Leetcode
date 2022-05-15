// Very easy to understand solution.
var isSameTree = function(p, q) {
	if (p == null && q == null) {
		return true;
	}
    if ((p == null && q != null) || (q == null && p != null)) {
		return false;
	}
    if (p.val != q.val) {
	    return false;
	}
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Simplify solution from above.
var isSameTree = function(p, q) {
	if (p === null || q === null) {
		return p === q;
	}
    if (p.val != q.val) {
	    return false;
	}
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Simplifier solution.
var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Using JSON.stringify.
var isSameTree = function(p, q) {
    return JSON.stringify(p)===JSON.stringify(q)
};