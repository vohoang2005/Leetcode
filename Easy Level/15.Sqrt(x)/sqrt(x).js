// Easiest way to solve sqrt is use the built-in Function.
var mySqrt = function (x) {
  return Math.sqrt(x) << 0;
 };

// Another way is use Vanilla Javascript.
var mySqrt = function(x) {
  for(let i=1;i<=x;i++){
      if(i*i >x){
        return i-1;
      }   
    }
      if(x==1) return 1;
        return 0;
};

// You can also use Math.floor to solve this problem.
var mySqrt = function(x) {
  let i = 1, j = x, ans = 0;
    while (i <=j){
      let mid = i + Math.floor((j-i)/2);
      if (mid * mid <= x){
        i = mid +1;
        ans = mid;
      }
      else
          j = mid-1;
    }
    return ans;
};