function solution(citations) {
    citations.sort((a, b)=>a - b);
    let min = 0;
    let max = Math.max(...citations);
    while(min<=max){
        let hMid = ((min+max) / 2) >> 0;
        const h = citations.filter((v)=>v>=hMid).length;
        const rest = citations.length - h;
        if(h >= hMid && rest <= hMid){
            min = hMid + 1;
        }else{
            max = hMid - 1;
        }
    }
    return max;
}