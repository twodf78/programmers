function solution(n, s, a, b, fares) {
  const dp = Array.from({ length: n + 1 }, (_) => Array.from({ length: n + 1 }, (_) => Infinity));
  for (let i = 1; i <= n; i++) {
    dp[i][i] = 0;
  }
  for (const [a, b, cost] of fares) {
    dp[a][b] = cost;
    dp[b][a] = cost;
  }
​
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (dp[i][j] > dp[i][k] + dp[k][j]) {
          dp[i][j] = dp[i][k] + dp[k][j];
        }
      }
    }
  }
​
  let answer = Infinity;
  for (let i = 1; i <= n; i++) {
    const val = dp[s][i] + dp[i][a] + dp[i][b];
    answer = answer > val ? val : answer;
  }
  return answer;
}