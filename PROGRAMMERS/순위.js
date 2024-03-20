function solution(n, results) {
    const winList = Array.from({length: n + 1}, _ => []);
    const loseList = Array.from({length: n + 1}, _ => []);
    
    for(const [win, lose] of results){
        winList[win].push(lose);
        loseList[lose].push(win);
    }
    const getResult = (idx, winOrLoose, visit) => {
        let res = 0;
        const queue = winOrLoose ? winList[idx] : loseList[idx];
        for(let i = 0; i< queue.length; i++){
            const idx= queue[i];
            if(visit[idx]) continue;
            visit[idx] = true;
            if(winOrLoose === 1){
                res += getResult(idx, 1, visit) + 1;
            }else{
                res += getResult(idx, 0, visit) + 1;
            }
        }
        return res;
    }
    
    let answer = 0;
    for(let i = 1; i<= n;i++){
        const win = getResult(i, 1, Array.from({length: n + 1}, _ => false));
        const lose = getResult(i, 0, Array.from({length: n + 1}, _ => false));
        if(win + lose >= n - 1) answer++;
    }
    return answer;
}