const getMap = (list) => {
    const map = {};
    for(const [e1, e2] of list){
        if(map[e1]){
            map[e1].push(e2);
        }else{
            map[e1] = [e2];
        }
        
        if(map[e2]){
            map[e2].push(e1);
        }else{
            map[e2] = [e1];
        }
    }
    return map;
}
function solution(n, edge) {
    const dist = Array.from({length: n}, _ =>Infinity);
    const map = getMap(edge);
    
    dist[1] = 0;
    let count = 0;
    const bfs = (queue) => {
        count++;
        const newQueue = [];
        while(queue.length){
            const idx = queue.shift();
            const nextList = map[idx];
            for(let i = 0; i<nextList.length; i++){
                const next = nextList[i];
                if(dist[next] <= 50001) continue;
                dist[next] = count;
                newQueue.push(next);
            }
        }
        if(newQueue.length){
            return bfs(newQueue);
        }else{
            return;
        }
    }
    
    bfs([1]);
    return dist.filter((v) => v === count - 1).length;
}