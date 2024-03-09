        }
function solution(n, results) {
    let answer = 0;
    
    const gameResult = Array.from({length: n + 1}, _=>[[],[]]);
    const rank = Array.from({length: n + 1}, _=>[]);
    
    for(const [win, lose] of results){
        gameResult[win][0].push(lose);
        gameResult[lose][1].push(win);
    }
    
    const findRank = (i, winOrLoose, visit) =>{
        let rank = 0;
        const nextQueue = gameResult[i][winOrLoose];
        
        for(const next of nextQueue){
            if(visit[next]) continue;
            visit[next] = true;
            rank += findRank(next, winOrLoose, visit) + 1;
        }
        return rank;
    }
    for(let i = 1; i<=n ; i++){
        const wins = findRank(i, 0, Array.from({length : n+1}, (_)=>false));
        const loses = findRank(i, 1, Array.from({length : n+1}, (_)=>false));
        
        if(wins + loses >= n - 1){
            answer++;
        }
    }
        
    return answer;
}