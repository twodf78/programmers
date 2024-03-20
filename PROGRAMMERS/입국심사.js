function solution(n, times) {
    times.sort((a, b) => a-b);
    let min = 1;
    let max = times[0] * n;
    
    const isAble = (mid) =>{
        let count = 0;
        for(const time of times){
            count+=Math.floor(mid / time);
            if(count >= n) return true;
        }
        return false;
    }
    while(min<= max){
        let mid = Math.floor((min + max) / 2);
        if(isAble(mid)){
            max = mid - 1;
        }else{
            min = mid + 1;
        }
    }
    return min;
}