// Solved by using Reverse.
var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^A-Za-z0-9]/g,'');
    x = s.split('').reverse().join('')
    return s == x
};

// Solved by using Vanilla Script.
var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, '');
  
    for(let i = 0; i < (s.length-1)/2; i++) {
      if(s[i] !== s[s.length-1-i]) {
        return false
      }
    }
  return true
};