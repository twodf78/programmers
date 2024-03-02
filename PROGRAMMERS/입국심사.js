const isAble = (n, list, totalTime) =>{
    let max = 0;
    for(let i =0; i<list.length; i++){
        max += Math.floor(totalTime / list[i]);
        if(max >= n) return true;
    }
    return false;
}
​
function solution(n, times) {
    var answer = 0;
    times.sort((a,b)=>a-b);
    
    let max = times[times.length - 1] * n;
    let min = 1;
    
    while(min<= max){
        let mid = Math.floor((min + max) / 2);
        
        if(isAble(n, times, mid)){
            max = mid - 1;
        }else{
            min = mid + 1;
        }
        }else{
    }
    return min;
}