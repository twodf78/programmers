function solution (n, money) {
  const dp = [1, ...new Array(n).fill(0)];
  for(let i = 0; i < money.length; i++) {
    const currentMoneyType = money[i];
    for(let j = 0; j <= n; j++) {
      if(j >= currentMoneyType)
        dp[j] += dp[j - currentMoneyType] % 1000000007;
    }
      
  }
  return dp[n];
}