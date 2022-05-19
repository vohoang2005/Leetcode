// Using Reverse to Solve Palindrome Problem.

var isPalindrome = function(x) {
    return x == x.toString().split('').reverse().join('');
  };

// 80% Runtime & 46% Memory, negative numbers will fail Palindrome.
var isPalindrome = function(x) {
    let num = x.toString();
    for(let i = 0; i < (num.length/2); i++) {
        if(num[i]!=num[num.length-1-i]) return false;
    }
    return true
};