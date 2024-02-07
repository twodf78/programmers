function solution(n, stations, w) {

    const coverRange = w * 2 + 1;    
    
    let answer = 0;
    let previousMax = 0;
    
    for(let i = 0; i< stations.length; i++){
        const currentStation = stations[i];
        const currentMin = currentStation - w;
        
        const interval = currentMin - previousMax - 1;
        
        previousMax = currentStation + w;
        
        if(interval <= 0) continue;
        
        answer += Math.ceil(interval / coverRange);
        
        if(previousMax >= n) return answer;
    }
    const lastStation = stations[stations.length - 1];
    const lastMax = lastStation + w;
    
    if(lastMax >= n){
        return answer;
    }else{
        return answer + Math.ceil((n - lastMax) / coverRange);
    }
}