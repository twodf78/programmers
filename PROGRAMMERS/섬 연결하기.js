const findParent = (i, parent) =>{
    return parent[i] === i ? parent[i] : findParent(parent[i], parent);
}
const unionParent = (a, b, parent)=>{
    let aP = findParent(a, parent);
    let bP = findParent(b, parent);
    if(aP <= bP){
        parent[bP] = aP;
    }else{
        parent[aP] = bP;
    }
}
​
const isSameParent = (a, b, parent)=>{
    return findParent(a, parent) === findParent(b, parent);
}
function solution(n, costs) {
    const parent = Array.from({length: n + 1}, (_, i)=>i);
    let res = 0;
    costs.sort((a,b)=>a[2]-b[2]);
    for(const [a, b, cost] of costs){
        if(isSameParent(a, b, parent))continue;
        unionParent(a, b, parent);
        res += cost;
    }
    return res;
}
​
​
​
    if (!findParent(parent, cost[0], cost[1])) {