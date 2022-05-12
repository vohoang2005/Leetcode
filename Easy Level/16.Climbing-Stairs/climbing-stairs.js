// Can use new Array or you can use let dp = []; either one works.

var climbStairs = function(n) {
    let dp = new Array(n);
      dp[0] = 1;
      dp[1] = 1;
      dp[2] = 2;
    for(let i = 3; i <= n; i++) {
      dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n];
  };

// You can have faster Runtime and Memory by add 1 more dp[3];

var climbStairs = function(n) {
    let dp = new Array(n);
      dp[0] = 1;
      dp[1] = 1;
      dp[2] = 2;
      dp[3] = 3;
    for(let i = 4; i <= n; i++) {
      dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n];
  };