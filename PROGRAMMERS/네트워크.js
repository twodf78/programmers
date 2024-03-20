function solution(n, computers) {
    const visit = Array.from({length: n}, _ => false);
    let count = 0;
    const bfs = (queue) =>{
        const newQueue = [];
        while(queue.length){
            const current = queue.shift();
            visit[current] = true;
            
            const nextList = computers[current];
            for(let i = 0; i<nextList.length; i++){
                const next = nextList[i];
                if(visit[i] || next === 0) continue;
                newQueue.push(i);
            }
        }
        
        if(newQueue.length){
            return bfs(newQueue);
        }else{
            return;
        }
        
    }
    for(let i = 0; i<computers.length; i++){
        if(visit[i]) continue;
        bfs([i]);
        count++;
    }
    return count;
}