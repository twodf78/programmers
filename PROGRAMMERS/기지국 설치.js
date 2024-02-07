function solution(n, stations, w) {
​
    const coverRange = w * 2 + 1;    
    
    let answer = 0;
    let previousMax = 0;
    
    for(let i = 0; i< stations.length; i++){
        const currentMin = stations[i] - w;
        
        const interval = currentMin - previousMax - 1;
        
        previousMax = stations[i] + w;
        
        if(interval <= 0) continue;
        
        answer += Math.ceil(interval / coverRange);
        
        if(previousMax >= n) return answer;
    }
    return answer + Math.ceil((n - previousMax) / coverRange);
}