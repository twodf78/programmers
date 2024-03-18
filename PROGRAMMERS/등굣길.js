​
function solution(m, n, puddles) {
    const dp = Array.from({length: m}, _ => Array.from({length: n}, _ => 1));
    for(const [m1, n1] of puddles){
        dp[m1 - 1][n1 - 1] = 0;
    }
    
    for(let i = m - 1; i>= 0; i--){
        for(let j = n - 1; j>= 0; j--){
            if(dp[i][j] === 0) continue;
            if(j === n - 1 && i!==m-1){
                dp[i][j] = dp[i+1][j] % 1000000007;
            }else if(j !== n- 1 && i=== m-1){
                dp[i][j] = dp[i][j+1] % 1000000007;
            }else if(i !== m-1 && j !== n-1){
                dp[i][j] = (dp[i + 1][j] + dp[i][j + 1]) % 1000000007;
            }
        }
    }
    return dp[0][0] % 1000000007;
}