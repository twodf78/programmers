function solution(prices) {
    const dp = Array.from({length: prices.length}, _ => 0);
    const stack = [[prices[0], 0]];
    for(let i = 1; i<prices.length; i++){
        if(stack[stack.length - 1][0] <= prices[i]){
            stack.push([prices[i], i]);
        }else{
            while(stack.length && stack[stack.length - 1][0] > prices[i]){
                const [last, lastIdx] = stack.pop();
                dp[lastIdx] = i - lastIdx;
            }
            stack.push([prices[i], i]);
        }
    }
    while(stack.length){
        const [last, lastIdx] = stack.pop();
        dp[lastIdx] = prices.length - 1 - lastIdx;
    }
    return dp;
    
}