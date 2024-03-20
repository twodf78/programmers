function solution(distance, rocks, n) {
    rocks=[...rocks.sort((a,b)=>a-b),distance];
    
    const calculateDist = (k) => {
        let startDist = 0;
        let cnt = n;
        for(let i = 0 ; i < rocks.length;i++){
            const curDist = rocks[i]-startDist;
            if(curDist < k) cnt--;
            else startDist = rocks[i];
        }
        
        if(cnt<0) return false;
        return true;
    }
    
    
    
    let min = 0;
    let max = distance;
    while(min<=max){
        const mid = Math.floor((min+max)/2);
        if(calculateDist(mid)) min = mid+1;
        else max = mid -1;
    }
    
    return max;
}
​