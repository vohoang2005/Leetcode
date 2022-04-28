var longestCommonPrefix = function(strs) {
    // Return "" if the input is empty
    if(!strs.length) return "";
    
    // Loop through the  characters of the first string
    for(let i = 0; i < strs[0].length; i++) {
        //Loop through all the  strings
        for (let str of strs) {
            // Check if the character is present in the same position in all strings
            if (str[i] !== strs[0][i]) {
                // If not, return the first string, up to the character that was not found
                return str.slice(0, i);
            }
        }
    }
    // All characters were found, return the entire first string
    return strs[0];
};