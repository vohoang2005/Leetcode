// Great solution, harder to understand.
var merge = function(nums1, m, nums2, n) {
	let i = m + n - 1;
	m = m - 1;
	n = n - 1;

	while (m >= 0 && n >= 0) {
		nums1[i--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
	}

	while (n >= 0) {
		nums1[i--] = nums2[n--];
	}
};

// Easier to understand, but Runtime and Memory is not great.
var merge = function(nums1, m, nums2, n) {
    let k=0
    for(let i=m; i<m+n; i++){
        nums1[i]  = nums2[k++]
    }
    nums1.sort((a,b)=>a-b);
};
