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
        while(queue.length > 0){
            const node = queue.shift();
            const nextVisited = edgeMap[node];
            nextVisited.forEach((v)=>{
                if(!visitedMap[v]) newQueue.add(v);
            })
        }
        
        newQueue = [...newQueue];
        if(newQueue.length === 0){
            return currentNodeNum;
        }
        else{
            return bfs(newQueue);
        }
    }
    visitedMap[1] = true;
    return bfs(edgeMap[1]);
}