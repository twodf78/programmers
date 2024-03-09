function solution(citations) {
    citations.sort((a,b)=>a-b);
​
    let hMax = 10000;
    let hMin = 0;
    while(hMin<=hMax){
        let hMid = Math.ceil((hMax + hMin) /2 );
​
        const hOver = citations.filter((v)=>v>=hMid).length;
        if(hOver>=hMid){
            if(citations.length - hOver - 1 < 0 || citations[citations.length - hOver - 1] <= hMid){
                hMin = hMid + 1;
            }
            else{
                hMax = hMid - 1;
            }
        }else{
            hMax = hMid - 1;
        }
    }
    
    return hMax <= -1 ? 0 : hMax;
}