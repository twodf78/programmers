def solution(n):
    dp = [];
    dp.append(0);
    dp.append(1);
    dp.append(2);
    for i in range(2, n + 1):
        dp.append((dp[i-1] + dp[i])%1234567)
    return dp[n] %1234567