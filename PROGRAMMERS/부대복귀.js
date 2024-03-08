function solution(n, roads, sources, destination) {
    const costList =  Array.from({length: n + 1}, _ => Infinity);
    const map = Array.from({length: n + 1}, _ => []);
​
    for(const [a, b] of roads){
        map[a].push(b);
        map[b].push(a);
    }
    let queue = [destination];
    costList[destination] = 0;
    console.log("map:>>", map)
    while(queue.length){
        const from = queue.shift();
        const nextList = map[from];
        if(!nextList) continue;
        for(let i = 0; i<nextList.length; i++){
            const next = nextList[i];
            if(costList[from] + 1 < costList[next]){
                costList[next] = costList[from] + 1;
                queue.push(next);
            }
        }
    }
​
    return sources.map((v)=> costList[v] === Infinity ? -1 : costList[v]);
}