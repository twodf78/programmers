const visit = (n, idx) => {
    return Array.from({length: n}, (_, i) => i === idx ? true : false);
}
function solution(k, dungeons) {
    const dLen = dungeons.length;
    
    const dfs = (visit, remain) =>{
        
        let res = 1;
        for(let i = 0; i< dLen; i++){
            if(visit[i]) continue;
            if(remain >= dungeons[i][0]){
                const newVisit = [...visit];
                newVisit[i] = true;
                const currentCount = dfs(newVisit, remain - dungeons[i][1]) + 1;
                res = currentCount > res ?  currentCount : res;
            }
        }
        return res;
    }
    let maxCount = 0;
    for(let i = 0; i< dLen; i++){
        const count = dfs(visit(dLen, i), k - dungeons[i][1]);
        
        maxCount = Math.max(maxCount, count);
    }
    return maxCount; 
}