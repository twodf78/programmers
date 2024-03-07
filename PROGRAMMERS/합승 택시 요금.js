        i===start ? visit[i] = 1 : visit[i] = false;
const visit = (n, start) =>{
    const visit = {};
    for(let i = 1; i<= n; i++){
        i===start ? visit[i] = 1 : visit[i] = false;
    }
    visit['max'] = 1;
    return visit;
}
function solution(n, startPoint, a, b, fares) {
    var answer = 0;
    
    const map = {};
    for(const [start, end, cost] of fares){
        if (map[start]){
            map[start].push([end, cost]);
        }else{
            map[start]= [[end, cost]];
        }
        
        if (map[end]){
            map[end].push([start, cost]);
​
        }else{
            map[end]= [[start, cost]];
        }
    }
    
    let min = 100000 * n;
    let route = {};
    const bfs = (queue)=>{
        const newQueue = [];
        while(queue.length){
            const [start, visit, sum] = queue.shift();
​
            const nextVisit = map[start];
            for(let i = 0 ; i< nextVisit.length; i++){
                const [next, cost] = nextVisit[i];
                if(visit[next]) continue;
                
                let tempVisit = {...visit};
                tempVisit['max'] += 1;
                tempVisit[next] = tempVisit['max'];
                if(next === startPoint){
                    if(min > sum + cost){
                        min = sum + cost;
                        route = {...tempVisit};
                    }
                    continue;
                }
                newQueue.push([next, tempVisit, sum + cost]);
            }
        }
        
        if(newQueue.length){
            return bfs(newQueue);
        }else{
            return;
        }
        
    }
    
    bfs([[a, visit(n, a), 0]]);
    const aMin = min;
    const aRoute = route;
    
    bfs([[b, visit(n, b), 0]]);
    const bMin = min;
    const bRoute = route;
​
    
    return answer;
}