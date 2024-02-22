function solution(n, edge) {
    const edgeMap = {};
    const visitedMap = {};
    
    edge.forEach(([a,b])=>{
        edgeMap[a] ? edgeMap[a].push(b) : edgeMap[a] = [b];
        edgeMap[b] ? edgeMap[b].push(a) : edgeMap[b] = [a];
        visitedMap[a] = false;
        visitedMap[b] = false;
    })
    
    const bfs = (queue) =>{
        const currentNodeNum = queue.length;
        queue.forEach((v)=>{
            visitedMap[v] = true;
        })
        
        let newQueue = new Set();
        while(queue.length){
            const node = queue.shift();
            edgeMap[node].forEach((v)=>{
                if(!visitedMap[v]) newQueue.add(v);
            })
        }
        return newQueue.size === 0 ? currentNodeNum : bfs([...newQueue]);
    }
​
    return bfs([1]);
}