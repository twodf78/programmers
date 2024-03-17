function solution(n, wires) {
    const wireList = Array.from({length: n + 1},  _ =>[]);
    
    for (const [v1, v2] of wires){
        wireList[v1].push(v2);
        wireList[v2].push(v1);
    }
​
    const distList = Array.from({length: n + 1},  _ => 0);
    const sumList = Array.from({length: n + 1},  _ => 0);
​
    for(let times = 0; times< n; times++){
        for(let i = 1; i<= n; i++){
            const left = wireList[i].length;
            if(left === 0) continue;
            if(left === 1){
                distList[i] = Math.max(distList[i], n - sumList[i] - 1);
                wireList[i].shift();
            }else{
                for(let j = 0; j<wireList[i].length;j++){
                    const connect = wireList[i][j];
                    if(wireList[connect].length === 0){
                        distList[i] = Math.max(distList[i], n - distList[connect]);
                        sumList[i] += n - distList[connect];
                        wireList[i] = wireList[i].filter((v, idx)=>idx!==j);;
                        j--;
                    }
                }
            }
        }
    }
​
    distList.shift();
    distList.sort((a,b)=>a-b);
    return Math.abs((n - distList[0]) - distList[0]);
}