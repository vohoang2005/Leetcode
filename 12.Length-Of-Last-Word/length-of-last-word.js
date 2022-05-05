// Using Pop to get the length of the last string. (45% Runtime, 65% Memory)
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};

// Normal Vanilla javascript, 37% Runtime, 97% Memory.

var lengthOfLastWord = function(s) {
    let x = s.trim().split(' ');
    return y = x[x.length - 1].length
  };

// using .at instead of .pop, but .at Runtime and Memory is very poor, 27%.

var lengthOfLastWord = function(s) {
    const x = s.trim().split(' ')
    return x.at(-1).length
  };