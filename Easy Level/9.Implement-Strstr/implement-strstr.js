var strStr = function(haystack, needle) {
    if (haystack === needle || needle === "") {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let temp = haystack.substring(i, i + needle.length);
            if (temp === needle) {
                return i;
            }
        }
    }
    return -1;      //return -1 if there wasn't a match
};