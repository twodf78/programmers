function solution(distance, rocks, n) {
    rocks.sort((a, b)=>a-b);
    const interval = Array.from({length: rocks.length + 1}, _ => 0);
    interval[0] = rocks[0];
    for(let i = 1; i < rocks.length; i++){
        interval[i] = rocks[i] - rocks[i - 1];
    }
    interval[interval.length - 1] = distance - rocks[rocks.length - 1];
    
    const isAble = (mid) =>{
        let count = n;
        for(let i = 0; i< interval.length ; i++){
            let current = interval[i];
            if(current >= mid) continue;
            while(current < mid){
                count--;
                if(i < interval.length - 1){
                    i++;
                    current += interval[i];
                }else{
                    break;
                }
                if(count < 0) break;
            }
        };
        return count >= 0;
    }
        
    let min = 0; 
    let max = distance;
    let answer = 0;
    while(min <= max){
        let mid = Math.floor((min + max) / 2);
​
        if(isAble(mid)){
            min = mid + 1;
        }else{
            max = mid - 1;
        }
    }
    return max;
}