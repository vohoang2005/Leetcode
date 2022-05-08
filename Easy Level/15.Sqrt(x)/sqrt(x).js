// Easiest way to solve sqrt is use the built-in Function.
var mySqrt = function (x) {
  return Math.sqrt(x) << 0;
 };

// Another way is use Vanilla Javascript.
var mySqrt = function(x) {
  for(let i=1;i<=x;i++){
      if(i * i > x){
        return i - 1;
      }   
    }
      if(x == 1) return 1;
        return 0;
};

// Very easy to understand solution.
var mySqrt = function(x) {
  let i = 1;
  while(i * i <= x) {
    i++;
  }
  return i - 1;
};
